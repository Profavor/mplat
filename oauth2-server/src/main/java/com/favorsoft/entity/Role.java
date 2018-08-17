package com.favorsoft.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name="role")
public class Role extends BaseEntity implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "roleid", length = 20)
	private String roleId;

	public Role() {}

	public Role(String roleId){
		this.roleId = roleId;
	}
}