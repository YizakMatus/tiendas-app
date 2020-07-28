import { Injectable } from "@angular/core";
import { CommercesService } from "../commerces/commerces.service";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  products = new Map();

  constructor(private commerceService: CommercesService) {}

  add(product) {
    const commerceProducts = this.products.get(
      this.commerceService.selectedCommerce.id
    );
    if (commerceProducts) {
      commerceProducts.push(product);
    } else {
      this.products.set(this.commerceService.selectedCommerce.id, [product]);
    }
  }

  getProducts() {
    return this.products.get(this.commerceService.selectedCommerce.id) || [];
  }

  getTotal() {
    let total = 0;
    this.getProducts().forEach((product) => {
      total = total + product.price;
    });
    return total;
  }

  getProductsList() {
    let list = "";
    this.getProducts().forEach((product, index) => {
      list += `${index + 1}. ${product.name}, $${product.price}` + "\n";
    });
    return list;
  }
}
