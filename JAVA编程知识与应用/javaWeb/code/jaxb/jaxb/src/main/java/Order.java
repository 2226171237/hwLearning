import lombok.Data;

import javax.xml.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@XmlRootElement(name = "Order")
@XmlAccessorType(XmlAccessType.FIELD)
@Data
public class Order {
    private String id;
    private Float price;
    @XmlElementWrapper(name = "Products")
    @XmlElement(name = "Product")
    private List<Product> products;


    public static void main(String[] args) throws Exception {
        Product product1 = new Product();
        product1.setId("1100");
        product1.setName("Apple");
        Product product2 = new Product();
        product2.setId("1102");
        product2.setName("Banana");
        Order order = new Order();
        order.setId("1101");
        order.setPrice(25.5f);
        order.setProducts(Arrays.asList(product1, product2));
        SimpleTest.javaToXml(order, Order.class);
    }
}
