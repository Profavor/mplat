package com.favorsoft.web.messages;

import com.favorsoft.entity.Dictionary;
import com.favorsoft.repository.DictinoaryRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Created by profa on 2017-02-04.
 */
@Component
public class DatabaseMessageSource {
    private static Map<String, String> cachedProperties = new HashMap<String, String>();

    @Getter
    private static boolean cache = false;

    @Autowired
    private DictinoaryRepository dictinoaryRepository;

    private Map<String, String> refreshProperties() {
        synchronized (DatabaseMessageSource.cachedProperties) {
            Collection<Dictionary> dicList = dictinoaryRepository.findAll();
            Map<String, String> dicMap = new HashMap<String, String>();
            for(Dictionary dictionary : dicList){
                dicMap.put(dictionary.getDicId()+".NAME."+dictionary.getLang(), dictionary.getName());
                dicMap.put(dictionary.getDicId()+".SHORTNAME."+dictionary.getLang(), dictionary.getShortName());
                dicMap.put(dictionary.getDicId()+".DESCRIPTION."+dictionary.getLang(), dictionary.getDescription());
                dicMap.put(dictionary.getDicId()+".ABBREVIATION."+dictionary.getLang(), dictionary.getAbbreviation());
                dicMap.put(dictionary.getDicId()+".MESSAGE."+dictionary.getLang(), dictionary.getName());
            }
            cachedProperties.clear();

            cachedProperties.putAll(dicMap);
            return cachedProperties;
        }
    }

    @Cacheable(cacheNames="dictionary", sync=true)
    public Map<String, String> getProperties() {
        synchronized (DatabaseMessageSource.cachedProperties) {
            return refreshProperties();
        }
    }

    /**
     * 다국어 사전정보를 가져온다.
     * @param strDicId
     * @param messageType (NAME, SHORTNAME, MESSAGE, DESCRIPTION, ABBREVIATION)
     * @param locale
     * @return
     */
    public static String getMessage(String strDicId, MessageType messageType, Locale locale){
        String message = DatabaseMessageSource.cachedProperties.get(makeKey(strDicId, messageType.getMessageType(), locale));
        if(message == null || "".equals(message)){
            message = "Can not find message!! [dicId="+strDicId+"]";
        }
        return message;
    }

    //Message Key 조합
    private static String makeKey(String strDicId, String messageType, Locale locale){
        return strDicId+"."+messageType+"."+locale.getLanguage().toUpperCase();
    }
}