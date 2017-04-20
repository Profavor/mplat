package com.favorsoft.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

/**
 * Created by profa on 2017-04-08.
 */
@Configuration
@EnableAuthorizationServer
public class OAuth2AuthorizationServerConfig{
    @Value("${favor.token.secret}")
    private String secret;

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() throws UnsupportedEncodingException {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setSigningKey(new String(Base64.getDecoder().decode(secret), "utf-8"));
        return converter;
    }
    
    @Bean
    public TokenStore tokenStore() throws UnsupportedEncodingException {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }
}
