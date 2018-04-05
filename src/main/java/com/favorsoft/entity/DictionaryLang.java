package com.favorsoft.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.ToString;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@Entity
@Table(name="dictionaryLang")
@ToString
public class DictionaryLang extends BaseEntity implements Serializable {
    public DictionaryLang(){}

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "id", length = 128)
    private String id;
    
    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, targetEntity=Dictionary.class)
    @JoinColumn(name="dicId", referencedColumnName = "dicId")
    private Dictionary dictionary;
    
    private String lang;
    
    private String message;

    
}
