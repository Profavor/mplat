package com.favorsoft.repository;

import com.favorsoft.entity.Dictionary;
import com.favorsoft.entity.key.DictionaryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by profa on 2017-02-04.
 */
@Repository
public interface DictinoaryRepository extends JpaRepository<Dictionary, DictionaryKey> {
}
