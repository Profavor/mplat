package com.favorsoft.security.jwt;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by profa on 2017-04-07.
 */
@Data
public class JwtAuthenticationRequest implements Serializable {
    private String username;
    private String password;

    public JwtAuthenticationRequest() {
        super();
    }

    public JwtAuthenticationRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }
}
