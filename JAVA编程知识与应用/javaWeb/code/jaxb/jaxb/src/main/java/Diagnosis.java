import lombok.Data;

import javax.xml.bind.annotation.*;
import java.util.List;

@XmlRootElement(name = "Diagnosis")
@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class Diagnosis {

    @XmlAttribute(name = "type")
    private String diagnosisType;

    @XmlElement(name = "RootPath")
    private String rootPath;

    @XmlElementWrapper(name = "SetParameterList")
    @XmlElement(name = "Parameter")
    List<DiagnosisParam> setParams;

    @XmlElementWrapper(name = "GetParameterList")
    @XmlElement(name = "Parameter")
    List<DiagnosisParam> getParams;
}
