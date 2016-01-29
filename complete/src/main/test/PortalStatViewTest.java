import hello.DevPropertiesConfig;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import service.ConfigurationService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = DevPropertiesConfig.class, loader = AnnotationConfigContextLoader.class)
public class PortalStatViewTest extends TestCase {


    @Autowired
    private ConfigurationService configurationService;


    @Test
    public void testMultiplePortalStatViews() {

        //configurationService.testMultiplePortalstat();
    }
}