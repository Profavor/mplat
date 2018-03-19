package com.favorsoft.entity.oauth2;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="oauth_code")
public class OAuthCode {

	@Id
	@Column(length = 256)
	private String code;
	
	@Lob
	private String authentication;

}
