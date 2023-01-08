import lombok.Data;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class Product {
    @XmlAttribute
    private String id;
    @XmlValue
    private String name;
}
