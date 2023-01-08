import lombok.Data;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.annotation.*;

@Data
@XmlRootElement
@XmlAccessorType(value = XmlAccessType.FIELD)
public class TeacherA {
    @XmlAttribute(name = "ID")
    private String id;
    private String name;
    private Integer age;

    public static void main(String[] args) throws Exception{
        TeacherA teacherA = new TeacherA();
        teacherA.setId("10001");
        teacherA.setName("Kije");
        teacherA.setAge(30);
        SimpleTest.javaToXml(teacherA,TeacherA.class);
        SimpleTest.xmlToJava("lesson2.xml",TeacherA.class);
    }
}


