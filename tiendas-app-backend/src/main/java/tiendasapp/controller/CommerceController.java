package tiendasapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tiendasapp.model.AuthRequest;
import tiendasapp.entity.Commerce;
import tiendasapp.entity.Product;
import tiendasapp.repository.CommerceRepository;

import java.util.List;

@RestController
@RequestMapping("commerce")
public class CommerceController {

    private final CommerceRepository commerceRepository;

    public CommerceController(CommerceRepository commerceRepository) {
        this.commerceRepository = commerceRepository;
    }

    @CrossOrigin
    @PostMapping()
    public @ResponseBody
    String addNewCommerce(
            @RequestParam String name,
            @RequestParam String ruc,
            @RequestParam String email,
            @RequestParam String address,
            @RequestParam String phone,
            @RequestParam String password,
            @RequestParam String description) {
        Commerce commerce = new Commerce();
        commerce.setName(name);
        commerce.setRuc(ruc);
        commerce.setEmail(email);
        commerce.setAddress(address);
        commerce.setPhone(phone);
        commerce.setPassword(password);
        commerce.setDescription(description);
        commerceRepository.save(commerce);
        return "Saved";
    }

    @CrossOrigin
    @GetMapping()
    public @ResponseBody
    List<Commerce> getAllCommerces() {
        return (List<Commerce>) commerceRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}/products")
    public @ResponseBody
    List<Product> getAllCommerces(@PathVariable("id") int id) {
        return commerceRepository.findById(id).get().getProducts();
    }

    @CrossOrigin
    @PostMapping("/auth")
    public @ResponseBody
    Commerce authenticate(@RequestBody AuthRequest authRequest) {
        Commerce commerce = commerceRepository.findByEmailAndPassword(authRequest.email, authRequest.password);
        if (commerce == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        return commerce;
    }
}
