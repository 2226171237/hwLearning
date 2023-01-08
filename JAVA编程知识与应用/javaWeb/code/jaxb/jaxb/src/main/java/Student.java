import lombok.*;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.InputStream;
import java.io.PrintWriter;

@XmlRootElement(name="Student")
@XmlAccessorType(XmlAccessType.FIELD)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {


    private String id;

    private String name;
    @XmlAttribute
    private Integer age;


    public static void javaToXml(Student student) throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(Student.class);
        Marshaller marshaller = jaxbContext.createMarshaller();
        // 设置转换参数-》是否格式化输出
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
        marshaller.marshal(student, System.out);
    }

    public static void xmlToJava() throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(Student.class);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        InputStream inputStream = Student.class.getClassLoader().getResourceAsStream("lesson1.xml");
        Student student = (Student) unmarshaller.unmarshal(inputStream);
        System.out.println(student);
    }


    public static void main(String[] args) throws Exception {
        Student student = new Student("10011", "Jack", 20);
        javaToXml(student);
    }
}
