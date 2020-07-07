package tiendasapp.controller;

import org.springframework.web.bind.annotation.*;
import tiendasapp.entity.Commerce;
import tiendasapp.entity.Product;
import tiendasapp.repository.CommerceRepository;
import tiendasapp.repository.ProductRepository;

import java.math.BigDecimal;
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
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam String unit,
            @RequestParam BigDecimal price,
            @RequestParam String image,
            @RequestParam int commerceId) {
        Optional<Commerce> commerce = commerceRepository.findById(commerceId);
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setUnit(unit);
        product.setPrice(price);
        product.setImage(image);
        product.setCommerce(commerce);
        productRepository.save(product);
        return "Saved";
    }

    @GetMapping(path = "/{commerceId}")
    public @ResponseBody
    Optional<Product> getProductByCommerce(@PathVariable("commerceId") int commerceId) {
        return productRepository.findById(commerceId);
    }
}
