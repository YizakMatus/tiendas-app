package tiendasapp.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Optional;

@Entity
public class Product {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String description;
    private String unit;
    private BigDecimal price;
    private String image;
    @ManyToOne
    @JoinColumn(name = "commerce_id")
    private Optional<Commerce> commerce;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Optional<Commerce> getCommerce() {
        return commerce;
    }

    public void setCommerce(Optional<Commerce> commerce) {
        this.commerce = commerce;
    }
}
