package com.favorsoft.entity.oauth2;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="oauth_refresh_token")
public class OAuthRefreshToken {
	
	@Id
	@Column(length = 256)
	private String tokenId;
	
	@Lob
	private String token;	

	@Lob
	private String authentication;

}
