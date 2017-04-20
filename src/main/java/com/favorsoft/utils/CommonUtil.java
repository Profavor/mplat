package com.favorsoft.utils;

import org.springframework.beans.BeanUtils;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.lang.reflect.Method;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Stream;

/**
 * Created by profa on 2017-02-04.
 */
public class CommonUtil {

    public static String null2String(Object obj) throws Exception {
        if (obj == null) {
            return "";

        } else {
            return (String)obj;
        }
    }

    public static Object getSafeObject(Object obj) throws Exception {
        if(obj == null){
            obj = new Object();
        }
        return obj;
    }

    public static Object convertParamToObject(Class<?> clazz,  Map<String, String> params) throws Exception {
        BeanUtils.copyProperties(clazz, params);
        return clazz;
    }

    public static String generateUUID() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    public static String makeStackTrace(Throwable t) {
        String result = null;
        try {
            ByteArrayOutputStream bout = new ByteArrayOutputStream();
            t.printStackTrace(new PrintStream(bout));
            bout.flush();

            result = new String(bout.toByteArray());

        } catch(Exception e) {
            return "";
        }
        return result;
    }

    public static String getRootCauseStackTrace(final Throwable throwable) {
        Optional<Throwable> rootCause = Stream.iterate(throwable, Throwable::getCause).filter(element -> element.getCause() == null).findFirst();
        return makeStackTrace(rootCause.get());
    }


    public static Map<String, Object> convertObjectToMap(Object obj) throws Exception {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            BeanInfo info = Introspector.getBeanInfo(obj.getClass());

            for (PropertyDescriptor pd : info.getPropertyDescriptors()) {
                Method reader = pd.getReadMethod();

                if (reader != null) {
                    Object valObj = reader.invoke(obj);
                    if (valObj == null) {
                        result.put(pd.getName(), "");

                    } else if (valObj instanceof List) {
//						result.put(pd.getName(), ((List<?>) valObj).toArray());

                    } else if (valObj instanceof String) {
                        result.put(pd.getName(), reader.invoke(obj));

                    } else if (valObj instanceof Date) {
                        DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
                        result.put(pd.getName(), df.format(reader.invoke(obj)));

                    } else if (valObj instanceof Boolean) {
                        result.put(pd.getName(), String.valueOf(reader.invoke(obj)));

                    } else if (valObj instanceof Integer) {
                        result.put(pd.getName(), String.valueOf(reader.invoke(obj)));

                    } else {

                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
