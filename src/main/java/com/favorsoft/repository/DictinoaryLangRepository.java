package com.favorsoft.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.favorsoft.entity.Dictionary;
import com.favorsoft.entity.DictionaryLang;

/**
 * Created by profa on 2017-02-04.
 */
@Repository
public interface DictinoaryLangRepository extends JpaRepository<DictionaryLang, String> {	
	
	Optional<DictionaryLang> findByDictionaryAndLang(Optional<Dictionary> dicId, String lang);
}
