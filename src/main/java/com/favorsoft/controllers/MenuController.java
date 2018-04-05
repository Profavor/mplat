package com.favorsoft.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.favorsoft.common.AjaxModel;
import com.favorsoft.entity.Menu;
import com.favorsoft.repository.MenuRepository;

@Controller
@RequestMapping(value="/api/menu")
public class MenuController {
	
	@Autowired
	private MenuRepository menuRepository;
	
	@RequestMapping(value="/getTopMenu", method = RequestMethod.POST)
	@ResponseBody
	public AjaxModel<Collection<Optional<Menu>>> getTopMenu() {		
		AjaxModel<Collection<Optional<Menu>>> ajaxModel = new AjaxModel<>();		
		try {
			Optional<Menu> menu =  menuRepository.findByPath("root");
			if(menu.isPresent()) {				 
				ajaxModel.setObj(menuRepository.findByParentId(menu.get().getId()));	
			}else {
				throw new Exception("Cannot find root menu.");
			}			
			ajaxModel.setSuccess(true);
		}catch(Exception e) {
			ajaxModel.setSuccess(false);
			ajaxModel.setMessage(e.getMessage());
		}
		
		return ajaxModel;
	}
}
