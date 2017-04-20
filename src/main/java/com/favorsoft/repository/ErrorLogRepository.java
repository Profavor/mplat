package com.favorsoft.repository;

import com.favorsoft.entity.ErrorLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;



@Repository(value="errorLogDao")
@Transactional
public interface ErrorLogRepository extends JpaRepository<ErrorLog, UUID> {


}