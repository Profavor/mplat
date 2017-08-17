package com.favorsoft.controllers;

import com.favorsoft.entity.FileAttach;
import com.favorsoft.repository.FileAttachRepository;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping(path = "/api/attachments")
public class FileController {
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    private FileAttachRepository fileAttachRepository;

    @RequestMapping(path = "upload", method = RequestMethod.POST)
    public ResponseEntity<?> uploadAttachment(@RequestPart MultipartFile sourceFile) throws IOException {
        String sourceFileName = sourceFile.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
        File destinationFile;
        String destinationFileName;
        do {
            destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + sourceFileNameExtension;
            destinationFile = new File("C:/attachments/" + destinationFileName);
        } while (destinationFile.exists());
        destinationFile.getParentFile().mkdirs();
        sourceFile.transferTo(destinationFile);

        FileAttach fileAttach = new FileAttach();
        fileAttach.setFileName(sourceFile.getOriginalFilename());
        fileAttach.setTempFileName(destinationFileName);
        fileAttach.setFileSize(sourceFile.getSize());
        fileAttach.setContentType(sourceFile.getContentType());
        fileAttachRepository.saveAndFlush(fileAttach);

        FileAttach response = fileAttachRepository.findByTempFileName(destinationFileName);
        if (logger.isDebugEnabled()) {
            logger.debug("#### File upload information ###");
            logger.debug(response.toString());
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<Resource> download(@RequestParam String tempFileName) throws IOException {

        File file = new File("C:/attachments/" + tempFileName);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }
}
