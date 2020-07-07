package tiendasapp.repository;

import org.springframework.data.repository.CrudRepository;
import tiendasapp.entity.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
