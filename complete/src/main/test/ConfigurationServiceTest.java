import hello.DevPropertiesConfig;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import service.ConfigurationService;

import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = DevPropertiesConfig.class, loader = AnnotationConfigContextLoader.class)
public class ConfigurationServiceTest extends TestCase {


    @Autowired
    private ConfigurationService configurationService;

    @Test
    public void testCUAPIValidURLConnection() throws Exception {
        String apiRequest = "<Request><PingXML><Data>Test Ping</Data></PingXML></Request>";
        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg", "sfg123", "cayrdsrc:901/cayentaAPI");
        assertEquals(retValue.get("status"), "success");
        assertEquals(retValue.get("message"), "Source and authentication is valid");
    }
    @Test
    public void testCUAPIInvalidURLConnection() throws Exception {
        String apiRequest = "<Request><PingXML><Data>Test Ping</Data></PingXML></Request>";
        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg", "sfg123", "scadyrdsrc:901/cayentaAPI");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unknown Host");
    }

    @Test
    public void testCUAPIValidUsernameConnection() throws Exception {
        String apiRequest = "<Request><PingXML><Data>Test Ping</Data></PingXML></Request>";
        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg1", "sfg123", "cayrdsrc:901/cayentaAPI");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unauthorized access");
    }
    @Test
    public void testCUAPIValidPasswordConnection() throws Exception {
        String apiRequest = "<Request><PingXML><Data>Test Ping</Data></PingXML></Request>";
        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg", "sfg1231", "cayrdsrc:901/cayentaAPI");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unauthorized access");
    }


    @Test
    public void testHRAPIValidconnection() {
        String apiRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Request><GetPa001t><Params><IncludeAssociations>true<Association>Pa001tActiveAssignment</Association></IncludeAssociations><RespondWithCSV>false</RespondWithCSV><EmployeeNo>92422</EmployeeNo></Params></GetPa001t></Request>";

        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg1", "sfg123", "cayrdsrc:9090/cayentahr/IAFDispatcher?acfAction=xmlRequest&dofMethod=xmlRequest");

    }

    @Test
    public void testHRAPIInvalidUrlconnection() {
        String apiRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Request><GetPa001t><Params><IncludeAssociations>true<Association>Pa001tActiveAssignment</Association></IncludeAssociations><RespondWithCSV>false</RespondWithCSV><EmployeeNo>92422</EmployeeNo></Params></GetPa001t></Request>";

        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg1", "sfg123", "cayrdsr2c:9090/cayentahr/IAFDispatcher?acfAction=xmlRequest&dofMethod=xmlRequest");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unknown Host");
    }

    @Test
    public void testHRAPIInvalidUsernameconnection() {
        String apiRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Request><GetPa001t><Params><IncludeAssociations>true<Association>Pa001tActiveAssignment</Association></IncludeAssociations><RespondWithCSV>false</RespondWithCSV><EmployeeNo>92422</EmployeeNo></Params></GetPa001t></Request>";

        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg1", "sfg1231", "cayrdsrc:9090/cayentahr/IAFDispatcher?acfAction=xmlRequest&dofMethod=xmlRequest");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unauthorized access");

    }

    @Test
    public void testHRAPIInvalidPasswordconnection() {
        String apiRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<Request><GetPa001t><Params><IncludeAssociations>true<Association>Pa001tActiveAssignment</Association></IncludeAssociations><RespondWithCSV>false</RespondWithCSV><EmployeeNo>92422</EmployeeNo></Params></GetPa001t></Request>";

        Map<String, String> retValue = configurationService.testAPIConnection(apiRequest, "sfg1", "sfg1232", "cayrdsrc:9090/cayentahr/IAFDispatcher?acfAction=xmlRequest&dofMethod=xmlRequest");
        assertEquals(retValue.get("status"), "failure");
        assertEquals(retValue.get("message"), "Unauthorized access");
    }

    @Test
    public void testMultiplePortalStatViews() {

        //configurationService.testMultiplePortalstat();
    }
}