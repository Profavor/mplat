package com.favorsoft.apps.mdm.repository;

import com.favorsoft.apps.mdm.entity.Prop;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by profa on 2017-06-15.
 */
@Repository
@JaversSpringDataAuditable
public interface PropRepository extends JpaRepository<Prop, String> {

}
