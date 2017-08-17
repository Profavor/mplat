package com.favorsoft.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name="fileattach")
public class FileAttach {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "id", length = 128)
    private String id;

    @Column(name = "fileName", length = 100, nullable = false, unique = false)
    private String fileName;

    @Column(name = "tempFileName", length = 100, nullable = false, unique = true)
    private String tempFileName;

    @Column(name = "fileSize", nullable = false, unique = false)
    private long fileSize;

    @Column(name = "contentType", nullable = false, unique = false)
    private String contentType;
}
