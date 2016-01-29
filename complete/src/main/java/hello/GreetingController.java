package hello;

import objects.PortalStatObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.ConfigurationService;
import service.PropertiesServices;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class GreetingController {
    @Autowired
    private PropertiesServices propertiesServices;

    @Autowired
    ConfigurationService configurationService;

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping(value="/test/request")
    public
    @ResponseBody
    Map<String, Object> testRequest(){
        Map<String, Object> returnValue = new HashMap<String, Object>();
        returnValue.put("status", "Perfect");
        returnValue.put("data", "This is a successful data");
        returnValue.put("message", "This is a successful message.");

        return returnValue;
    }

    @RequestMapping(value="/test/cu/connection")
    public
    @ResponseBody
    Map<String, String> testCUConnection(@RequestParam(value="username", defaultValue="sfg") String username,
                                         @RequestParam(value="password", defaultValue="sfg123") String password,
                                         @RequestParam(value="url", defaultValue="10.10.70.253:901/cayentaAPI") String url){
        String apiRequest = "<Request><PingXML><Data>Test Ping</Data></PingXML></Request>";
        return configurationService.testAPIConnection(apiRequest, username, password, url);
    }

    @RequestMapping(value="/test/hr/connection")
    public
    @ResponseBody
    Map<String, String> testHRconnection(@RequestParam(value="username", defaultValue="sfg") String username,
                                         @RequestParam(value="password", defaultValue="sfg123") String password,
                                         @RequestParam(value="url", defaultValue="10.10.70.253:8080/cayentahr/IAFDispatcher?acfAction=xmlRequest&dofMethod=xmlRequest") String url){
        String apiRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Request><GetPa001t><Params><IncludeAssociations>true<Association>Pa001tActiveAssignment</Association></IncludeAssociations><RespondWithCSV>false</RespondWithCSV><EmployeeNo>92422</EmployeeNo></Params></GetPa001t></Request>";

        return configurationService.testAPIConnection(apiRequest, username, password, url);
    }

    @RequestMapping(value="/test/portalstat/views")
    public
    @ResponseBody
    List<PortalStatObject> testPortalStat(@RequestParam(value="username", defaultValue="sfg") String username
                                            ,@RequestParam(value="password", defaultValue="sfg123") String password
                                            ,@RequestParam(value="url", defaultValue="10.10.70.253:901/cayentaAPI") String url
                                            ,@RequestParam(value="to_row", defaultValue="10") String toRow
                                            ,@RequestParam(value="emp_num", defaultValue="0000000617") String empNumber){
        return configurationService.testMultiplePortalstat(username, password, url, toRow, empNumber);

    }

    @RequestMapping(value="/get/properties")
    public @ResponseBody Map<String, String> getProperties(@RequestBody Map<String, Object> requestDate){




        return propertiesServices.returnPropertiesInMap(requestDate);
    }
    @RequestMapping(value="/save/properties")
    public @ResponseBody Map<String, String> updateProperties(@RequestBody Map<String, Object> requestData){




        return propertiesServices.writeProperties(requestData);
    }

}
