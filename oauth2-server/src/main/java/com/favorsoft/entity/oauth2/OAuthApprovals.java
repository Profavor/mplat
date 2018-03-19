package com.favorsoft.entity.oauth2;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="oauth_approvals")
public class OAuthApprovals {
	@Id
	@Column(length = 256)
	private String userId;
	
	@ManyToOne(cascade = CascadeType.ALL, targetEntity=OAuthClientDetails.class)
    @JoinColumn(name="client_id", referencedColumnName = "client_id")
	private OAuthClientDetails client;
	
	@Column(length = 256)
	private String scope;
	
	@Column(length = 10)
	private String status;
	
	@Column(name="expiresAt")
	private Date expiresAt;
	
	@Column(name="lastModifiedAt")
	private Date lastModifiedAt;
}
