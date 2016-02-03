package com.xss.WebUtil;

import com.cayenta.adp.lib.LibXML;
import com.cayenta.adp.lib.env.BasicAuth;
import org.apache.log4j.Logger;
import org.jdom.Document;
import org.jdom.JDOMException;
import org.jdom.output.XMLOutputter;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class ThinWebRouterAPI implements IThinWebRouterAPI, Serializable {
    private String userName;
    private String password;
    private String timeout;
    private String url;


    private final static Logger _logger = Logger.getLogger(ThinWebRouterAPI.class);

    public ThinWebRouterAPI() {


    }


    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setTimeout(String timeout) {
        this.timeout = timeout;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public Document apiCALL(String postData, String username, String password, String url) throws IOException {

        Document doc = null;
        if (username.equals("")) {
            username = this.userName;
        }
        if (password.equals("")) {
            password = this.password;
        }

        if (url.equals("")){
            url = this.url;
        }
        if(this.timeout==null){
            this.timeout = "2000";
        }

        URL apihref = new URL("http://" + url);

        _logger.info("username: " + username + ", password: "+password+", url: "+url);
        // Create base 64 encoded username:password and headers
        _logger.debug("Post Data: " + postData + "\n");
        if (postData != null) {
            _logger.info("Legible API Request: \n" + prettyPrintXmlString(postData));

            //   postData = "XMLREQUEST=" + URLEncoder.encode(postData.trim());// + "&GO=Submit+Query";
            postData = "XMLREQUEST=" + URLEncoder.encode(postData.trim());

            postData = postData.replaceAll("%40", "@");
            _logger.info("Post Data: " + postData + "\n");

            HttpURLConnection hconn = HTTPConnect(apihref, username, password, postData);

            // Check response codes and messages
            int respCode = hconn.getResponseCode();
            String respMessage = hconn.getResponseMessage();

            InputStreamReader in = new InputStreamReader(hconn.getInputStream());
            StringWriter writer = new StringWriter();
            char[] buffer = new char[1024];
            int x;
            while ((x = in.read(buffer)) != -1) {
                writer.write(buffer, 0, x);
            }
            String s = writer.toString();
            _logger.info("reply message: " + s);

            if (s.length() >= 6
                    && s.indexOf('<') != -1
                    && (!s.substring(s.indexOf('<'), s.indexOf('<') + 6).equalsIgnoreCase("<REPLY>") ||
                    !s.substring(s.indexOf('<'), s.indexOf('<') + 6).equalsIgnoreCase("<RESPONSE>"))) {

                s = "<REPLY>" + s + "</REPLY>";
            }

            _logger.info("RESPONSE: " + s + "\n");
            //LogMessage.print(3,"RESPONSE :: "+s);
            try {
             //   s = s.replaceAll("&amp;","&").replaceAll("&","&amp;");
                doc = LibXML.getXMLDocument(new StringBuffer(s));
            } catch (JDOMException e) {
                if (e.getMessage().contains("Illegal XML character")) {
                    // Could be bad data in the database
                    _logger.error("Unable to parse XML.  Possibly bad data in the database.  Exception:" +
                            e.getMessage() + "\nResponse: " + s);
                }
                e.printStackTrace();  //To change body of catch statement use Options | File Templates.
                throw new IOException("apiCALL error trying to create XML document from reply string:\n" + s);
            }
            in.close();
            _logger.info("Legible API Response: \n" + prettyPrintDocument(doc));
            return doc;
        }
        return doc;
    }

    /**
     * create a connection to the URL and send the data.
     *
     * @param apihref  -
     * @param userName -
     * @param password -
     * @param postData -
     * @return -
     * @throws java.io.IOException -
     */
    private HttpURLConnection HTTPConnect(URL apihref, String userName, String password, String postData) throws IOException {
        //  _logger.debug("userName:" + userName + " Password:" + password);
        String b64userid = BasicAuth.encode(userName, password);
        String userPass = userName + ":" + password;
        // _logger.debug("******** this is used to connect to the API: " + userPass);
        b64userid = b64userid.substring(0, (userPass.length() + 2) / 3 * 4);
        String authHeader = "Authorization";
        String credentials = "Basic " + b64userid;
        //  _logger.debug("credentials:" + credentials + ":");
        // Open http request and set up stuff
        HttpURLConnection hconn = (HttpURLConnection)
                apihref.openConnection();
        hconn.setRequestProperty(authHeader, credentials);
        hconn.setRequestProperty("Content-Type", "text/xml");
        if (timeout != null && !timeout.equals("")) {
            System.out.println("test to see if timeout takes: " + timeout);
            hconn.setRequestProperty("Timeout", timeout);
            hconn.setConnectTimeout(Integer.parseInt(timeout));
        }
        hconn.setDoOutput(true);
        hconn.setDoInput(true);
        hconn.setRequestMethod("POST");
        PrintWriter out = new PrintWriter(hconn.getOutputStream());
        out.print(postData);
        out.close();
        return hconn;
    }

    public static String prettyPrintDocument(Document document) {
        return (new XMLOutputter("  ", true).outputString(document));
    }

    public static String prettyPrintXmlString(String documentString) {
        try {
            return prettyPrintDocument(LibXML.getXMLDocument(new StringBuffer(documentString)));
        } catch (JDOMException e) {
            _logger.debug("Failed to parse XML string, so not pretty-printing it...");
            return documentString;
        }
    }
}
