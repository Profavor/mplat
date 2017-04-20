package com.favorsoft.entity.key;

import com.favorsoft.entity.Role;
import com.favorsoft.entity.Usr;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@ToString
public class UsrRoleKey implements Serializable {
    private Usr usr;
    private Role role;
}