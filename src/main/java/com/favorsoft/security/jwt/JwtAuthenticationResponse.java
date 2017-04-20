package com.favorsoft.security.jwt;

import lombok.Getter;

import java.io.Serializable;

/**
 * Created by profa on 2017-04-07.
 */
public class JwtAuthenticationResponse implements Serializable {
    @Getter
    private final String token;

    public JwtAuthenticationResponse(String token) {
        this.token = token;
    }
}
