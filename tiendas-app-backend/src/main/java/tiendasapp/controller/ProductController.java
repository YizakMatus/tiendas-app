package tiendasapp.controller;

import org.springframework.web.bind.annotation.*;
import tiendasapp.entity.Commerce;
import tiendasapp.entity.Product;
import tiendasapp.repository.CommerceRepository;
import tiendasapp.repository.ProductRepository;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
public class ProductController {

    private final ProductRepository productRepository;
    private final CommerceRepository commerceRepository;

    public ProductController(ProductRepository productRepository, CommerceRepository commerceRepository) {
        this.productRepository = productRepository;
        this.commerceRepository = commerceRepository;
    }

    @PostMapping(path = "/add")
    public @ResponseBody
    String addNewProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("unit") String unit,
            @RequestParam("price") BigDecimal price,
            @RequestParam("image") String image,
            @RequestParam("commerceId") int commerceId) {
        Optional<Commerce> commerce = commerceRepository.findById(commerceId);
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setUnit(unit);
        product.setPrice(price);
        product.setImage(image);
        product.setCommerce(commerce.get());
        return "Saved";
    }

    @GetMapping(path = "/{commerceId}")
    public @ResponseBody
    List<Product> getProductByCommerce(@PathVariable("commerceId") Integer commerceId) {
        return (List<Product>) productRepository.findAllById(Collections.singleton(commerceId));
    }
}
