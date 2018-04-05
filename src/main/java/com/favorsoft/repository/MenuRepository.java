package com.favorsoft.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.favorsoft.entity.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, String> {
	public Collection<Optional<Menu>> findByParentId(String parentId);
	
	public Optional<Menu> findByPath(String path);
}
