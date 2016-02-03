package com.xss.service;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

/**
 * Created by h13640 on 1/14/2016.
 */
@Component("PropertiesServices")
public class PropertiesServices {

    Properties appProp = null;
    Properties dataAccessProp = null;


    public Properties loadAppProperties(String filePath) {
        Properties prop = new Properties();
        InputStream input = null;

        try {

            input = new FileInputStream(filePath);

            // load a properties file
            prop.load(input);


        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return prop;
    }

    public Properties getPropertiesByType(String filepath, String type){
        if(type.equalsIgnoreCase("app")){
            if(appProp==null){
                appProp =  loadAppProperties(filepath);

            }
            return appProp;
        }else{
            if(dataAccessProp==null){
                dataAccessProp = loadAppProperties(filepath);
            }
            return dataAccessProp;
        }
    }

    private List readPropertiesForEditing(String path) throws IOException {
        File file = new File("C:\\prj\\ESSReskin\\src\\main\\webapp\\conf\\application.properties");
        List lines = null;
        lines = FileUtils.readLines(file, "UTF-8");

        return lines;
    }

    private List updateProperties(Map<String, String> properties, String path) throws IOException {

        List fileLines = readPropertiesForEditing(path);
        for (Map.Entry<String, String> entry : properties.entrySet())
        {
            updateSingleProperties(entry.getKey(), entry.getValue(), fileLines);
        }
        return fileLines;
    }

    private void updateSingleProperties(String key, String value, List fileLines){
        for(int i = 0; i < fileLines.size(); i++){

            if(((String)(fileLines.get(i))).contains(key)&&confirmTheRightKey(key, (String)fileLines.get(i))&&
                    (((String)fileLines.get(i)).contains("="))&&
                    (!(((String) fileLines.get(i)).startsWith("#")))){
                fileLines.set(i, key+"="+value);
            }
        }
    }
    private boolean confirmTheRightKey(String key, String line){
        String[] temp = line.split("=");
        if(temp.length==2&&key.length()==temp[0].length()){
            return true;
        }
        return false;
    }

    public Map<String,String> writeProperties(Map<String, Object> requestData) {
        Map<String, String> retMap = new HashMap<String, String>();

        String path = (String)requestData.get("filePath");
        Map<String, String> properties = (Map<String, String>)requestData.get("updateProperties");
        File file = null;
        List lines = null;
        try {
            file = new File(path);
            lines = updateProperties(properties, path);
            FileUtils.writeLines(file, lines);
            retMap.put("status", "success");
            retMap.put("message", "Saved Successfully");
        } catch (IOException e) {
           retMap.put("status", "failure");
           retMap.put("message", "System Error During Saving. "+e.getMessage());
        }

        return retMap;

    }

    public Map<String, String> returnPropertiesInMap(Map<String, Object> requestData) {
        if((requestData.get("refresh")!=null)&&(Boolean)requestData.get("refresh")){
            appProp = null;
            dataAccessProp = null;
        }
        Properties prop = getPropertiesByType((String) requestData.get("filePath"), (String)requestData.get("propertiesType"));
        Map<String, String> retMap = new HashMap<String, String>();
        List<String> propertyKeys = (List<String>) requestData.get("keys");
        for (String single : propertyKeys) {
            retMap.put(single, prop.getProperty(single));
        }

        return retMap;
    }
}
