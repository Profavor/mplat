package com.favorsoft.security.handler;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.favorsoft.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.jackson2.SecurityJackson2Modules;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;

public class LoginSuccessHandler implements AuthenticationSuccessHandler{

	@Autowired
	public TokenUtil tokenUtil;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		
		ObjectMapper om = new ObjectMapper();		
		Map<String, Object> map = new HashMap<String, Object>();
		ClassLoader loader = getClass().getClassLoader();
		List<Module> modules = SecurityJackson2Modules.getModules(loader);

		response.setHeader("auth-jwt-token", "");
		
		map.put("success", true);
		map.put("returnUrl", getReturnUrl(request, response));
		map.put("message", "Login Successed.");
		map.put("token-value", authentication.getDetails());
			
		String jsonString = om.writeValueAsString(map);
		
		ServletOutputStream out = response.getOutputStream();
		out.write(jsonString.getBytes("utf-8"));		
	}
	
	/**
	 * Login 하기 전의 요청했던 URL을 알아낸다.
	 * @param request
	 * @param response
	 * @return
	 */
	private String getReturnUrl(HttpServletRequest request, HttpServletResponse response){
		RequestCache requestCache = new HttpSessionRequestCache();
		SavedRequest savedRequest = requestCache.getRequest(request, response);
		if(savedRequest == null){
			return request.getSession().getServletContext().getContextPath();
		}
		return savedRequest.getRedirectUrl();
	}
	
}
