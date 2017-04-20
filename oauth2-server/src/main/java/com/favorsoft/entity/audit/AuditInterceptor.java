package com.favorsoft.entity.audit;

import com.favorsoft.entity.BaseEntity;
import org.apache.commons.lang3.ArrayUtils;
import org.hibernate.EmptyInterceptor;
import org.hibernate.type.Type;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Date;

public class AuditInterceptor extends EmptyInterceptor {
	private static final long serialVersionUID = 1L;

	/**
	 * @since 2016.01.27
	 * @author profavor
	 * 생성자, 생성일, 수정자, 수정일 자동 입력 인터셉터
	 */
	public boolean onFlushDirty(Object entity, Serializable id, Object[] currentState,  Object[] previousState, String[] propertyNames, Type[] types) {
        if (entity instanceof BaseEntity) {
            int indexOf = ArrayUtils.indexOf(propertyNames, "lastUpdated");
            currentState[indexOf] = new Date();

            indexOf = ArrayUtils.indexOf(propertyNames, "updator");
            currentState[indexOf] = getUsrname();
            return true;
        }
        return false;
    }

    public boolean onSave(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
        if (entity instanceof BaseEntity) {
            int indexOf = ArrayUtils.indexOf(propertyNames, "createdDate");
            state[indexOf] = new Date();

            indexOf = ArrayUtils.indexOf(propertyNames, "creator");
            state[indexOf] = getUsrname();

            return true;
        }
        return false;
    }

    private String getUsrname(){
    	Object obj = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username = "";

		if (obj instanceof UserDetails) {
		  username = ((UserDetails)obj).getUsername();
		} else {
		  username = obj.toString();
		}
		return username;
    }
}
