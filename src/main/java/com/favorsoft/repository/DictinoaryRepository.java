package com.favorsoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.favorsoft.entity.Dictionary;

/**
 * Created by profa on 2017-02-04.
 */
@Repository
public interface DictinoaryRepository extends JpaRepository<Dictionary, String> {

}
