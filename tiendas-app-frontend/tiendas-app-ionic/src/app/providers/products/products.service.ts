import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private products = [];
  private productsByCommerce = [];

  constructor(public http: HttpClient) {}

  load(): any {
    if (this.products.length) {
      return of(this.products);
    }
    return this.http.get("assets/data/commerce-products.json");
  }

  getProductsByCommerce(commerceId) {
    if (this.productsByCommerce.length) {
      return of(this.productsByCommerce);
    }
    return this.http.get("assets/data/products.json");
  }
}
