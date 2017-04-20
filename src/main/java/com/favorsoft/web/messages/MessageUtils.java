package com.favorsoft.web.messages;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Locale;

/**
 * Created by profa on 2017-02-04.
 */

@Component
public class MessageUtils {
    protected final Logger logger = Logger.getLogger(getClass());

    @Autowired
    private DatabaseMessageSource databaseMessageSource;

    public String getMessage(HttpServletRequest request, String strDicId, MessageType messageType){
        databaseMessageSource.getProperties();

        return DatabaseMessageSource.getMessage(strDicId, messageType, getSessionLocale(request));
    }

    public static Locale getSessionLocale(HttpServletRequest request){
        Locale locale = (Locale) WebUtils.getSessionAttribute(request, SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME);
        if(locale == null){
            locale = request.getLocale();
        }
        return locale;
    }
}
