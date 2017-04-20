package com.favorsoft.service.impl;

import com.favorsoft.repository.UsrRepository;
import com.favorsoft.service.UsrService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Created by profa on 2017-02-04.
 */
@Service
public class UsrServiceImpl implements UsrService {
    private static final Logger logger = LoggerFactory.getLogger(UsrServiceImpl.class);

    @Autowired
    public UsrRepository usrRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usrRepository.findByLoginId(username);
    }
}
