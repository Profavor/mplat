package com.favorsoft.security;

import com.favorsoft.entity.Usr;
import com.favorsoft.repository.UsrRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Collection;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider, Serializable {
	private static final Logger logger = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private UsrRepository usrRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String loginId = String.valueOf(authentication.getPrincipal());
		String password =  String.valueOf(authentication.getCredentials());

		if(logger.isDebugEnabled()){
			logger.debug("Login Processing... loginId: " + loginId);
		}
		Usr usr = usrRepository.findByLoginId(loginId);

		//Check authentication
		if (usr == null || !(passwordEncoder.matches(password, usr.getPassword()))) {
			if(logger.isDebugEnabled()){
				logger.debug("LoginID -> "+loginId);
			}	
	
			throw new BadCredentialsException("BadCredentialsException");
		}
		//Role
		Collection<? extends GrantedAuthority> authorities = usr.getAuthorities();

		return new UsernamePasswordAuthenticationToken(loginId, password, authorities);
	}

	@Override
	public boolean supports(Class<? extends Object> authentication) {
		return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	}
}
