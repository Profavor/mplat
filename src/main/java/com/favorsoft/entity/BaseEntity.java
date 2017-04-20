package com.favorsoft.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
	@CreatedBy
	@Column(name = "CREATOR", length = 128, nullable = true, updatable = false)
	private String creator;

	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATEDDATE", nullable = false, updatable = false)
	private Date createdDate;
	
	@LastModifiedBy
	@Column(name = "UPDATOR", length = 128, nullable = true)
	private String updator;

	@LastModifiedDate
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "LASTUPDATED", nullable = true)
	private Date lastUpdated;
}
