import lombok.Data;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class DiagnosisParam {
    @XmlAttribute(name = "name")
    private String name;
    @XmlAttribute(name = "type")
    private String type;
    @XmlAttribute(name = "default")
    private String defaultValue;
    @XmlValue
    private String paramPath;
}
