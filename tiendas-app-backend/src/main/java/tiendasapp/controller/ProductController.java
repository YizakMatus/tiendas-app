package tiendasapp.controller;

import org.springframework.web.bind.annotation.*;
import tiendasapp.entity.Commerce;
import tiendasapp.entity.Product;
import tiendasapp.model.ProductRequest;
import tiendasapp.repository.CommerceRepository;
import tiendasapp.repository.ProductRepository;

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
    Product addNewProduct(@RequestBody ProductRequest productRequest) {
        Optional<Commerce> commerce = commerceRepository.findById(productRequest.commerceId);
        Product product = new Product();
        product.setName(productRequest.name);
        product.setDescription(productRequest.description);
        product.setUnit(productRequest.unit);
        product.setPrice(productRequest.price);
        product.setImage(productRequest.image);
        product.setCommerce(commerce.get());
        productRepository.save(product);
        return product;
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public @ResponseBody
    Product getProductByCommerce(@PathVariable("id") int id) {
        return productRepository.findById(id).get();
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        productRepository.deleteById(id);
    }
}
