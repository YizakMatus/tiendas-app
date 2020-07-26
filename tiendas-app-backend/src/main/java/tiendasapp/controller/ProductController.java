package tiendasapp.controller;

import org.springframework.web.bind.annotation.*;
import tiendasapp.entity.Commerce;
import tiendasapp.entity.Product;
import tiendasapp.model.ProductRequest;
import tiendasapp.repository.CommerceRepository;
import tiendasapp.repository.ProductRepository;

import java.math.BigDecimal;
import java.util.Collections;
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

    @CrossOrigin
    @PostMapping()
    public @ResponseBody
    String addNewProduct(@RequestBody ProductRequest productRequest) {
        Optional<Commerce> commerce = commerceRepository.findById(productRequest.commerceId);
        Product product = new Product();
        product.setName(productRequest.name);
        product.setDescription(productRequest.description);
        product.setUnit(productRequest.unit);
        product.setPrice(productRequest.price);
        product.setImage(productRequest.image);
        product.setCommerce(commerce.get());
        productRepository.save(product);
        return "Saved";
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public @ResponseBody
    Product getProductByCommerce(@PathVariable("id") int id) {
        return productRepository.findById(id).get();
    }
}
