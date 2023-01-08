import lombok.Data;

import javax.xml.bind.annotation.*;
import javax.xml.bind.annotation.adapters.XmlAdapter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapAdapter extends XmlAdapter<MapAdapter.MyData, Map<String, Diagnosis>> {
    @Override
    public Map<String, Diagnosis> unmarshal(MapAdapter.MyData v) throws Exception {
        Map<String, Diagnosis> map = new HashMap<>();
        System.out.println(v);
        for (Diagnosis diagnosis : v.getDiagnosisList()) {
            map.put(diagnosis.getDiagnosisType(), diagnosis);
        }
        return map;
    }

    @Override
    public MapAdapter.MyData marshal(Map<String, Diagnosis> v) throws Exception {
        return null;
    }


    @Data
    @XmlAccessorType(XmlAccessType.FIELD)
    static class MyData{
        @XmlElement(name = "Diagnosis")
        private List<Diagnosis> diagnosisList=new ArrayList<>();
    }
}