package com.favorsoft.entity.oauth2;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="oauth_client_token")
public class OAuthClientToken {
	@Id
	@Column(length = 256)
	private String authenticationId;
	
	@Column(length = 256)
	private String tokenId;
	
	@Lob
	private String token;
	
	
	@Column(length = 256)
	private String userName;
	
	@ManyToOne(cascade = CascadeType.ALL, targetEntity=OAuthClientDetails.class)
    @JoinColumn(name="client_id", referencedColumnName = "client_id")
	private OAuthClientDetails client;
}
