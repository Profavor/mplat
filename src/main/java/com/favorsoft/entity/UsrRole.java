package com.favorsoft.entity;

import com.favorsoft.entity.key.UsrRoleKey;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@Entity
@IdClass(value = UsrRoleKey.class)
@Table(name="usrrole")
public class UsrRole extends BaseEntity implements Serializable, GrantedAuthority {

    @Id
    @ManyToOne(cascade = CascadeType.ALL, targetEntity=Usr.class, fetch=FetchType.LAZY)
    @JoinColumn(name="usrid", referencedColumnName = "usrid")
    private Usr usr;

    @Id
    @ManyToOne(cascade = CascadeType.ALL, targetEntity=Role.class, fetch=FetchType.LAZY)
    @JoinColumn(name="roleid", referencedColumnName = "roleid")
    private Role role;

    @Override
    public String getAuthority() {
        return role.getRoleId();
    }
}
