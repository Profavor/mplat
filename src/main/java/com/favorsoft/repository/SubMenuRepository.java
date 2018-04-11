package com.favorsoft.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.favorsoft.entity.Menu;
import com.favorsoft.entity.SubMenu;

@Repository
public interface SubMenuRepository extends JpaRepository<SubMenu, String> {
	public Collection<Optional<SubMenu>> findByParentId(String parentId);
	
	public Optional<SubMenu> findByPath(String path);
	
	public Optional<SubMenu> findByMenu(Optional<Menu> menu);
}
