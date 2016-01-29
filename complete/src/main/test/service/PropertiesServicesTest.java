package service;

import hello.DevPropertiesConfig;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = DevPropertiesConfig.class, loader = AnnotationConfigContextLoader.class)
public class PropertiesServicesTest extends TestCase {


    @Autowired
    private PropertiesServices propertiesServices;



    public void testMultiplePortalStatViews() {

        String[] propertyKeys = {"loginTryLimit", "loginDuration", "contactTPValidationChange"};
        List propertyKeysList = Arrays.asList(propertyKeys);
        Map<String, Object> requestData = new HashMap<String, Object>();
        requestData.put("filePath", "C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\application.properties");
        requestData.put("keys", propertyKeysList);
        Map<String, String> retMap = propertiesServices.returnPropertiesInMap(requestData);

        for (Map.Entry<String, String> entry : retMap.entrySet())
        {
            System.out.println(entry.getKey() + "/" + entry.getValue());
        }
    }
    public void testWriteProperties() {

    }

    @Test
    public void testReadPropertiesForEditing() {

        Map<String, Object> requestData = new HashMap<String, Object>();
        requestData.put("filePath", "C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\application.properties");

        Map<String, String> wantToUpdateProperties = new HashMap<String, String>();
        wantToUpdateProperties.put("PortalStatAPIUserName", "gfs");
        wantToUpdateProperties.put("PortalStatAPIPassword", "321gfs");
        wantToUpdateProperties.put("PortalStatAPIUrl", "101.10.70.253:901/cayentaAPI");
        requestData.put("updateProperties", wantToUpdateProperties);

        propertiesServices.writeProperties(requestData);

    }
}