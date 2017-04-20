package com.favorsoft.repository.rest;

import com.favorsoft.entity.Dictionary;
import com.favorsoft.entity.key.DictionaryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

/**
 * Created by profa on 2017-02-04.
 */
@RepositoryRestResource(path = "/api/dictionary")
public interface DictinoaryRestRepository extends JpaRepository<Dictionary, DictionaryKey> {
}
