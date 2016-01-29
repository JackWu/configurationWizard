package service;

import WebUtil.IThinWebRouterAPI;
import com.cayenta.adp.lib.util.APIRequestDoc;
import objects.PortalStatObject;
import org.jdom.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by h13640 on 1/15/2016.
 */
@Component("ConfigurationService")
public class ConfigurationService {

    private IThinWebRouterAPI thinWebRouterAPI;
    @Autowired
    public void setThinWebRouterAPI(IThinWebRouterAPI thinWebRouterAPI) {
        this.thinWebRouterAPI = thinWebRouterAPI;
    }


    public Map<String, String> testAPIConnection(String request, String username, String password, String url) {
        Map<String, String> retValue = new HashMap<String, String>();
        try {
            this.thinWebRouterAPI.apiCALL(request, username, password, url);
            retValue.put("status", "success");
            retValue.put("message", "Source and authentication is valid");
        } catch (UnknownHostException e) {


            System.out.println("Unknown Host Exception");

            retValue.put("status", "failure");
            retValue.put("message", "Unknown Host");
        } catch (IOException e) {
            if(e.getMessage().contains("Server returned HTTP response code: 401")){
                System.out.println("Unauthorized access");
                retValue.put("status", "failure");
                retValue.put("message", "Unauthorized access");
            }else{
                System.out.println("Unauthorized access");
                retValue.put("status", "failure");
                retValue.put("message", e.getMessage()+". Most likely caused by invalid hostname.");
            }

        }

        return retValue;
    }





    public List<PortalStatObject> testMultiplePortalstat(String username, String password, String url, String toRow, String empNumber){

        String[] viewNames = {"ESS_PERSON", "ESS_EMPL_TOTALS", "ESS_LEAVE", "ESS_POSITION","ESS_DEPENDENTS", "ESS_CERTS", "ESS_EDU", "ESS_CONTCT", "ESS_BENEFICIARIES"};

        List<PortalStatObject> testPortalStatResultList = new ArrayList<PortalStatObject>();

        //testSinglePortalStat("sfg", "sfg123", "10.10.70.253:901/cayentaAPI", singleViewName, "10", "0000000617")

        for(String singleViewName: viewNames){

           Map<String,String> singleResultMap = testSinglePortalStat(username, password, url, singleViewName, toRow, empNumber);
           PortalStatObject tempObject = new PortalStatObject(singleViewName,singleResultMap.get("status"), singleResultMap.get("description"));
           testPortalStatResultList.add(tempObject);
        }

        return testPortalStatResultList;
    }


    private Map<String, String> testSinglePortalStat(String username, String password, String url, String viewName, String toRow, String employeeNum) {
        Map<String, String> retValue = new HashMap<String, String>();

        Document doc = null;
        try {
            doc = this.thinWebRouterAPI.apiCALL(this.portalStatRequestConstructor(viewName, toRow, employeeNum), username, password, url);

            APIRequestDoc apiRequestDoc = new APIRequestDoc(doc);
            retValue.put("status",  apiRequestDoc.getValue("STATUS"));
            retValue.put("description", apiRequestDoc.getValue("STATUS_DESC"));
            return retValue;
        } catch (IOException e) {
            retValue.put("status",  "exception");
            retValue.put("description", e.getMessage());
        }

        return retValue;

    }
    private String portalStatRequestConstructor(String viewName, String toRow, String employeeNum){
        String apiRequest = "<Request>\n" +
                "<GetPortalList>\n" +
                "<Params>\n" +
                "<PORTAL_SS>XX</PORTAL_SS>\n" +
                "<PORTAL_SCHEMA>FMS_CFG</PORTAL_SCHEMA>\n" +
                "<VIEW_NM>"+viewName+"</VIEW_NM>\n" +
                "<SELECT_NO></SELECT_NO>\n" +
                "<FROM_ROW>1</FROM_ROW>\n" +
                "<TO_ROW>"+toRow+"</TO_ROW>\n" +
                "<RESULTSET_SIZE></RESULTSET_SIZE>\n" +
                "<PARAMLIST>\n" +
                "<EMPLOYEE_NO>"+employeeNum+"</EMPLOYEE_NO>\n" +
                "</PARAMLIST>\n" +
                "</Params>\n" +
                "</GetPortalList>\n" +
                "</Request>\n";

        return apiRequest;

    }
}
