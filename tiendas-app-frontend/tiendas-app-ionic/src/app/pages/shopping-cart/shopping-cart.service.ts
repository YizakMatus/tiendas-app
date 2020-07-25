import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  products = [];

  constructor() {}

  add(product) {
    this.products.push(product);
  }

  getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total = total + product.price;
    });
    return total;
  }
}
