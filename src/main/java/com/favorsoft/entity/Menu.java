package com.favorsoft.entity;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.EqualsAndHashCode;
@EqualsAndHashCode(callSuper=false)
@Data
@Entity
@Table(name="menu")
public class Menu extends BaseEntity implements Serializable {
	@Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "id", length = 128)
    private String id;
	 
	private String path;
	
	@OneToOne(cascade = CascadeType.ALL, targetEntity=Dictionary.class, fetch=FetchType.EAGER)
	@JoinColumn(name="dicId", referencedColumnName = "dicId")
	private Dictionary dictionary;
	
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL, targetEntity=Menu.class, fetch=FetchType.LAZY)
	@JoinColumn(name="parentId", referencedColumnName = "id")
    private Menu parent;
	
	@JsonManagedReference
	@OneToMany(mappedBy="parent", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Collection<Menu> childMenu;
	
	private int dispSeq;	
	
	private String domain;
	
}
