package com.favorsoft.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.favorsoft.common.AjaxModel;
import com.favorsoft.entity.Dictionary;
import com.favorsoft.repository.DictinoaryRepository;

@Controller
@RequestMapping(value="/api/dictionary")
public class DictionaryController {
	
	@Autowired
	private DictinoaryRepository dictinoaryRepository;
	
	@RequestMapping(value="/getDictionary", method = RequestMethod.POST)
	@ResponseBody
	public AjaxModel<Optional<Dictionary>> getDictionaryByKorean(@RequestParam(name="dicId", defaultValue= "") String dicId) {
		AjaxModel<Optional<Dictionary>> ajaxModel = new AjaxModel<>();
		try {
			Optional<Dictionary> tempDictionary = dictinoaryRepository.findById(dicId);
			ajaxModel.setSuccess(true);
			ajaxModel.setObj(tempDictionary);
		}catch(Exception e) {
			ajaxModel.setSuccess(false);
			ajaxModel.setMessage(e.getMessage());
		}			
		return ajaxModel;
	}
	
}
