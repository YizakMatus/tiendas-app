package tiendasapp;

import org.springframework.web.bind.annotation.*;
import tiendasapp.entity.Commerce;
import tiendasapp.repository.CommerceRepository;

import java.util.List;

@RestController
public class CommerceController {

    private final CommerceRepository commerceRepository;

    public CommerceController(CommerceRepository commerceRepository) {
        this.commerceRepository = commerceRepository;
    }

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewCommerce () {
        Commerce commerce = new Commerce();
        commerce.setName("Los Arupos");
        commerceRepository.save(commerce);
        return "Saved";
    }

    @GetMapping(path="/commerces")
    public @ResponseBody
    List<Commerce> getAllCommerces() {
        List<Commerce> commerces = (List<Commerce>) commerceRepository.findAll();
        return commerces;
    }
}
