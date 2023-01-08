import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.InputStream;

public class SimpleTest {
    public static <T> void javaToXml(T value, Class<T> tClass) throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(tClass);
        Marshaller marshaller = jaxbContext.createMarshaller();
        // 设置转换参数-》是否格式化输出
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
        marshaller.marshal(value, System.out);
    }

    public static <T> Object xmlToJava(String filepath, Class<T> tClass) throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(tClass);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        InputStream inputStream = Student.class.getClassLoader().getResourceAsStream(filepath);
        Object obj = unmarshaller.unmarshal(inputStream);
        System.out.println(obj);
        return obj;
    }

    public static void main(String[] args) throws Exception {
        Object obj = xmlToJava("lession3.xml", DiagnosisDataModel.class);
        DiagnosisDataModel diagnosisDataModel=(DiagnosisDataModel) obj;
    }
}
