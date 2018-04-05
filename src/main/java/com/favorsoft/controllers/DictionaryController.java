package com.favorsoft.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.favorsoft.entity.Dictionary;
import com.favorsoft.entity.DictionaryLang;
import com.favorsoft.repository.DictinoaryLangRepository;
import com.favorsoft.repository.DictinoaryRepository;
import com.google.gson.Gson;

@Controller
@RequestMapping(value="/api/dictionary")
public class DictionaryController {
	
	@Autowired
	private DictinoaryRepository dictinoaryRepository;
	
	@Autowired
	private DictinoaryLangRepository dictinoaryLangRepository;
	
	@RequestMapping(value="/{lang}/{dicId}", method = RequestMethod.POST)
	public String getDictionaryByKorean(@PathVariable String dicId, @PathVariable String lang) {
		Gson gson = new Gson();		
		Optional<Dictionary> dictionary = dictinoaryRepository.findById(dicId);
		Optional<DictionaryLang> obj = dictinoaryLangRepository.findByDictionaryAndLang(dictionary, lang);		
		return gson.toJson(obj);
	}
	
}
