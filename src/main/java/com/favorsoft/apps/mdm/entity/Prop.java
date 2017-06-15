package com.favorsoft.apps.mdm.entity;

import com.favorsoft.entity.BaseEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by profa on 2017-06-15.
 */
@Data
@Entity(name = "prop")
public class Prop extends BaseEntity implements Serializable {

    @Id
    @Column(name = "propid", length = 32)
    private String propid;

    @Column(name = "proptype", length = 4)
    private String propType;

    @Column(name = "datatype", length = 4, nullable = false)
    private String dataType;
    //STRN , NVAL, DATE, BOOL, ENUM
    //Type별로 테이블에 값 저장?
    //PROP_STRN_PROPID

    @Column(name = "datalength", length = 4, nullable = false)
    private String dataLength;


}
