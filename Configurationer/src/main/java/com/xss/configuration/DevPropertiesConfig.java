package com.xss.configuration;


import com.xss.WebUtil.ThinWebRouterAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/**
 * Created by h13640 on 11/27/2015.
 */
@Configuration
@ComponentScan("com.xss.service")
public class DevPropertiesConfig {

    @Autowired
    private Environment environment;







    @Bean(name="thinWebRouterAPI")
    public ThinWebRouterAPI thinWebRouterAPI(){
        ThinWebRouterAPI thinWebRouterAPI = new ThinWebRouterAPI();
        thinWebRouterAPI.setUserName(environment.getProperty("APIuserName"));
        thinWebRouterAPI.setPassword(environment.getProperty("APIpassword"));
        thinWebRouterAPI.setUrl(environment.getProperty("APIurl"));

        return thinWebRouterAPI;
    }


}

