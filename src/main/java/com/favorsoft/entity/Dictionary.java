package com.favorsoft.entity;

import com.favorsoft.entity.key.DictionaryKey;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@Entity
@IdClass(value = DictionaryKey.class)
@Table(name="dictionary")
@ToString
public class Dictionary extends BaseEntity implements Serializable {
    public Dictionary(){}

    public Dictionary(DictionaryKey dicKey, String name, String shortName, String description, String abbreviation){
        this.dicId = dicKey.getDicId();
        this.lang = dicKey.getLang();
        this.name = name;
        this.shortName = shortName;
        this.description = description;
        this.abbreviation = abbreviation;
    }

    @Id
    @Column(name = "DICID", length = 12)
    private String dicId;

    @Id
    @Column(name = "LANG", length = 5)
    private String lang;

    @Column(name = "NAME", length = 100)
    private String name;

    @Column(name = "SHORTNAME", length = 50)
    private String shortName;

    @Column(name = "DESCRIPTION", length = 2000)
    private String description;

    @Column(name = "MESSAGE", length = 512)
    private String message;

    @Column(name = "ABBREVIATION", length = 10)
    private String abbreviation;
}
