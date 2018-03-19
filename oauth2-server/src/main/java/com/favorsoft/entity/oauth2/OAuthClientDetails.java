package com.favorsoft.entity.oauth2;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="oauth_client_details")
public class OAuthClientDetails {
	
	@Id
	@Column(name="client_id", length = 256)
	private String clientId;
	
	@Column(length = 256)
	private String resourceIds;
	
	@Column(length = 256)
	private String clientSecret;
	
	@Column(length = 256)
	private String scope;
	
	@Column(length = 256)
	private String authorizedGrantTypes;
	
	@Column(length = 256)
	private String webServerRedirectUri;
	
	@Column(length = 256)
	private String authorities;
	
	private int accessTokenValidity;
	
	private int refreshTokenValidity;
	
	@Column(length = 4096)
	private String additionalInformation;
	
	@Column(length = 256)
	private String autoapprove;

}
