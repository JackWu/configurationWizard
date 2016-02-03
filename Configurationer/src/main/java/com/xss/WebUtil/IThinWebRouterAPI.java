package com.xss.WebUtil;

import org.jdom.Document;

/**
 * Created with IntelliJ IDEA.
 * User: mmello
 * Date: 3/22/13
 * Time: 4:22 PM
 */
public interface IThinWebRouterAPI {
    public Document apiCALL(String postData, String username, String password, String url) throws java.io.IOException;

}
