package com.favorsoft.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.favorsoft.entity.Dictionary;

/**
 * Created by profa on 2017-02-04.
 */
@Repository
public interface DictinoaryRepository extends JpaRepository<Dictionary, String> {
	
	@Query(value="SELECT * FROM dictionary D INNER JOIN dictionary_lang DL ON D.DIC_ID = DL.DIC_ID WHERE DL.MESSAGE like %?1%", countQuery="SELECT count(*) FROM dictionary D INNER JOIN dictionary_lang DL ON D.DIC_ID = DL.DIC_ID WHERE DL.MESSAGE like %?1%", nativeQuery=true)
	public Page<Dictionary> findByMessageLike(@Param("message") String message, Pageable pageable);
}
