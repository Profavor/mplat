package com.favorsoft.entity;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.ToString;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@Entity
@Table(name="dictionary")
@ToString
public class Dictionary extends BaseEntity implements Serializable {
    public Dictionary(){}

    @Id
    @Column(name = "dicId", length = 128)
    private String dicId;    
    
    @JsonManagedReference
    @OneToMany(mappedBy="dictionary", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Collection<DictionaryLang> dictionaryLang;
}
