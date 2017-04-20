package com.favorsoft.repository;

import com.favorsoft.entity.Usr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by profa on 2017-02-04.
 */

@Repository
public interface UsrRepository extends JpaRepository<Usr, String> {
    Usr findByLoginId(String loginId);
}
