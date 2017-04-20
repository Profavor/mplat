package com.favorsoft.entity;

import com.favorsoft.exceptions.ErrorCode;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by profa on 2017-02-04.
 */
@Data
@EqualsAndHashCode(callSuper=false)
@Entity
@Table(name = "errorlog")
public class ErrorLog implements Serializable {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "errorid", unique = true, length = 128)
    private String errorId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "runtime", nullable = false)
    private Date runTime;

    @Column(name = "errorcode", length = 11, nullable = true)
    private String errorCode;

    @Column(name = "errormessage", length = 512, nullable = true)
    private String errorMessage;

    @Lob
    @Type(type="text")
    @Column(name = "stacktrace", length = 15000, nullable = true)
    private String stackTrace;

    @Column(name = "ipaddress", length = 15)
    private String ipAddress;

    @Column(name = "isnoti", length = 1, nullable = true)
    private char isNoti;

    @Column(name = "sendnotidate", nullable = true)
    private Date sendNotiDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="usrid", referencedColumnName = "usrid")
    private Usr usr;

    public ErrorLog(){

    }

    public ErrorLog(ErrorCode errorCode, String stackTrace){
        this.runTime = new Date();
        this.errorCode = errorCode.getCode();
        this.errorMessage = errorCode.getMessage();
        this.stackTrace = stackTrace;
        this.isNoti = 'N';
    }
}
