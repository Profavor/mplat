package com.favorsoft.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by profa on 2017-02-04.
 */
@Cacheable("user")
public interface UsrService extends UserDetailsService{

}
