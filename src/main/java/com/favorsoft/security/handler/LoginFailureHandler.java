package com.favorsoft.security.handler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LoginFailureHandler implements AuthenticationFailureHandler{
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		ObjectMapper om = new ObjectMapper();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("success", false);
		map.put("returnUrl", getReturnUrl(request, response));
		map.put("message", exception.getMessage());
		
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
