package com.favorsoft.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.favorsoft.common.AjaxModel;
import com.favorsoft.entity.Dictionary;
import com.favorsoft.entity.DictionaryLang;
import com.favorsoft.repository.DictinoaryLangRepository;
import com.favorsoft.repository.DictinoaryRepository;

@Controller
@RequestMapping(value="/api/dictionary")
public class DictionaryController {
	
	@Autowired
	private DictinoaryRepository dictinoaryRepository;
	
//	@Cacheable("dictionary")
	@RequestMapping(value="/{lang}.json", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public Map<String, String> getLang(@PathVariable String lang) {		
		Map<String, String> map = new HashMap<>();
		Collection<Dictionary> list = dictinoaryRepository.findAll();
		for(Dictionary dictionary : list) {
			Collection<DictionaryLang> langList = dictionary.getDictionaryLang();
			for(DictionaryLang dictionaryLang : langList) {
				if(dictionaryLang.getLang().toLowerCase().equals(lang.toLowerCase())) {
					map.put(dictionary.getDicId(), dictionaryLang.getMessage());
				}
			}
		}		
		return map;
	}	
	
	@RequestMapping(value="/getList", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public AjaxModel<Page<Dictionary>> getList(@RequestParam String message, Pageable pageable) {	
		AjaxModel<Page<Dictionary>> model = new AjaxModel<Page<Dictionary>>();
		try {
			Page<Dictionary> list = null;
			if ("".equals(message)) {
		       list = this.dictinoaryRepository.findAll(pageable);
		    } else {
		       list = this.dictinoaryRepository.findByMessageLike(message, pageable);
		    }			
			model.setSuccess(true);
			model.setObj(list);
		} catch(Exception e) {
			model.setMessage(e.getMessage());
		}
		
		return model;
	}	
	
	@RequestMapping(value="/{dicId}", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public AjaxModel<Optional<Dictionary>> getDictionary(@PathVariable String dicId) {	
		AjaxModel<Optional<Dictionary>> model = new AjaxModel<Optional<Dictionary>>();
		try {
			Optional<Dictionary> obj = dictinoaryRepository.findById(dicId);
			model.setSuccess(true);
			model.setObj(obj);
		} catch(Exception e) {
			model.setMessage(e.getMessage());
		}
		
		return model;
	}
	
	@RequestMapping(value="/save", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public AjaxModel<Dictionary> saveDictionary(HttpServletRequest request) {	
		String dicId = request.getParameter("dicId");
		String message_ko = request.getParameter("message_ko");
		String message_en = request.getParameter("message_en");
		
		AjaxModel<Dictionary> model = new AjaxModel<Dictionary>();
		Dictionary dictionary = new Dictionary();
		try {			
			Optional<Dictionary> obj = dictinoaryRepository.findById(dicId);			
			if(obj.isPresent()) {
				Collection<DictionaryLang> dicLangs = obj.get().getDictionaryLang();
				for(DictionaryLang dicLang: dicLangs) {
					if("KO".equals(dicLang.getLang())) {
						dicLang.setMessage(message_ko);
					} else if("EN".equals(dicLang.getLang())) {
						dicLang.setMessage(message_en);
					} else {
						dicLang.setMessage(message_en);
					}
				}
				dictionary = dictinoaryRepository.saveAndFlush(obj.get());
			} else {				
				dictionary.setDicId(dicId);
				dictionary = dictinoaryRepository.saveAndFlush(dictionary);
				Collection<DictionaryLang> dictionaryLangList = new ArrayList<>();
				DictionaryLang dicLangKO = new DictionaryLang();
				dicLangKO.setDictionary(dictionary);
				dicLangKO.setLang("KO");
				dicLangKO.setMessage(message_ko);
				DictionaryLang dicLangEN = new DictionaryLang();
				dicLangEN.setDictionary(dictionary);
				dicLangEN.setLang("EN");
				dicLangEN.setMessage(message_en);				
				dictionaryLangList.add(dicLangKO);
				dictionaryLangList.add(dicLangEN);				
				dictionary.setDictionaryLang(dictionaryLangList);
				dictionary = dictinoaryRepository.saveAndFlush(dictionary);
			}
			
			model.setSuccess(true);
			model.setObj(dictionary);
		} catch(Exception e) {
			model.setMessage(e.getMessage());
		}
		
		return model;
	}
	
	@RequestMapping(value="/delete", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public AjaxModel<Optional<Dictionary>> deleteDictionary(@RequestParam String dicId) {	
		AjaxModel<Optional<Dictionary>> model = new AjaxModel<Optional<Dictionary>>();
		try {
			String[] dicIds = dicId.split(",");
			for(String temp : dicIds) {
				Optional<Dictionary> obj = dictinoaryRepository.findById(temp);
				if(obj.isPresent()) {
					dictinoaryRepository.delete(obj.get());
				}				
			}			
			model.setSuccess(true);
		} catch(Exception e) {
			model.setMessage(e.getMessage());
		}
		
		return model;
	}
}
