package com.favorsoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.favorsoft.entity.ErrorLog;



@Repository(value="errorLogDao")
@Transactional
public interface ErrorLogRepository extends JpaRepository<ErrorLog, String> {


}