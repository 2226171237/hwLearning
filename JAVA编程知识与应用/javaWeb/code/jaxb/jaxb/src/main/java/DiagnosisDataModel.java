import lombok.Data;

import javax.xml.bind.annotation.*;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@XmlRootElement(name = "Diagnosies")
@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class DiagnosisDataModel {
    @XmlAttribute(name = "protocol")
    private String protocol;

    @XmlElement(name="DiagnosisMap")
    @XmlJavaTypeAdapter(MapAdapter.class)
    Map<String, Diagnosis> diagnosisList = new HashMap<>();
}
