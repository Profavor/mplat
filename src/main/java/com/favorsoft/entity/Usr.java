package com.favorsoft.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import org.hibernate.annotations.GenericGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@Entity
@Table(name="usr")
public class Usr extends BaseEntity implements UserDetails, Serializable {
    private static final Logger logger = LoggerFactory.getLogger(Usr.class);

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "usrid", length = 128)
    private String usrId;

    @Column(name = "loginid", length = 32, nullable = false, unique = true)
    private String loginId;

    @Column(name = "password", length = 256, nullable = false)
    private String password;

    @Column(name = "isaccountnonexpired", nullable = true)
    private boolean isAccountNonExpired;

    @Column(name = "isaccountnonlocked", nullable = true)
    private boolean isAccountNonLocked;

    @Column(name = "iscredentialsnonexpired", nullable = true)
    private boolean isCredentialsNonExpired;

    @Column(name = "isenabled", nullable = true)
    private boolean isEnabled;

    @JsonManagedReference
    @OneToMany(mappedBy="usr", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Collection<UsrRole> usrRoles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return usrRoles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return loginId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
}
