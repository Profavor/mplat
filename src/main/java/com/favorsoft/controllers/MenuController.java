package com.favorsoft.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.favorsoft.common.AjaxModel;
import com.favorsoft.entity.Menu;
import com.favorsoft.entity.SubMenu;
import com.favorsoft.repository.MenuRepository;
import com.favorsoft.repository.SubMenuRepository;

@Controller
@RequestMapping(value="/api/menu")
public class MenuController {
	
	@Autowired
	private MenuRepository menuRepository;
	
	@Autowired
	private SubMenuRepository subMenuRepository;
	
	@Cacheable("topMenu")
	@RequestMapping(value="/getTopMenu", method = RequestMethod.POST)
	@ResponseBody
	public AjaxModel<Collection<Optional<Menu>>> getTopMenu() {		
		AjaxModel<Collection<Optional<Menu>>> ajaxModel = new AjaxModel<>();		
		try {
			Optional<Menu> menu =  menuRepository.findByPath("/");
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
	
	@RequestMapping(value="/getTopMenuByParentId", method = RequestMethod.POST)
	@ResponseBody
	public AjaxModel<Collection<Optional<Menu>>> getTopMenuByParentId(@RequestParam String parentId) {		
		AjaxModel<Collection<Optional<Menu>>> ajaxModel = new AjaxModel<>();		
		try {
			Optional<Menu> menu =  menuRepository.findById(parentId);
			if(menu.isPresent()) {				 
				ajaxModel.setObj(menuRepository.findByParentId(menu.get().getId()));	
			}else {
				throw new Exception("Cannot find parent menu id->"+parentId);
			}			
			ajaxModel.setSuccess(true);
		}catch(Exception e) {
			ajaxModel.setSuccess(false);
			ajaxModel.setMessage(e.getMessage());
		}
		
		return ajaxModel;
	}
	
	@Cacheable("subMenu")
	@RequestMapping(value="/getSideMenu", method = RequestMethod.POST)
	@ResponseBody
	public AjaxModel<Collection<Optional<SubMenu>>> getSideMenu(@RequestParam(name="path", defaultValue="") String path) {		
		AjaxModel<Collection<Optional<SubMenu>>> ajaxModel = new AjaxModel<>();		
		try {
			Optional<Menu> menu = menuRepository.findByPath(path);			
			if(menu.isPresent()) {
				Optional<SubMenu> submenu = subMenuRepository.findByMenuAndParentId(menu, null);
				if(submenu.isPresent()) {
					ajaxModel.setObj(subMenuRepository.findByParentId(submenu.get().getId()));	
				}				
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
