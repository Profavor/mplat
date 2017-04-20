package com.favorsoft.security.jwt.controller;

import com.favorsoft.entity.Usr;
import com.favorsoft.security.jwt.JwtAuthenticationRequest;
import com.favorsoft.security.jwt.JwtAuthenticationResponse;
import com.favorsoft.service.UsrService;
import com.favorsoft.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by profa on 2017-04-07.
 */

@RestController
public class AuthenticationRestController {

    @Value("${favor.token.header}")
    private String tokenHeader;

    @Autowired
    private UsrService usrService;

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "${favor.route.authentication}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest, Device device) throws AuthenticationException {

        // Perform the security
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Reload password post-security so we can generate token
        final Usr usr = (Usr)usrService.loadUserByUsername(authenticationRequest.getUsername());
        final String token = tokenUtil.generateToken(usr, device);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationResponse(token));
    }

    @RequestMapping(value = "${favor.route.authentication.refresh}", method = RequestMethod.GET)
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String token = request.getHeader(tokenHeader);
        String username = tokenUtil.getUsernameFromToken(token);
        Usr user = (Usr) usrService.loadUserByUsername(username);

        if (tokenUtil.canTokenBeRefreshed(token, user.getLastUpdated())) {
            String refreshedToken = tokenUtil.refreshToken(token);
            return ResponseEntity.ok(new JwtAuthenticationResponse(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
