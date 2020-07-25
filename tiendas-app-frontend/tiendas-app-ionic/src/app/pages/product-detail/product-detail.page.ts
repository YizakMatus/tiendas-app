import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { ShoppingCartService } from "../../providers/shopping-cart/shopping-cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
})
export class ProductDetailPage implements OnInit {
  product;

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.product = this.productsService.selectedProduct;
  }

  onAddToCart() {
    this.shoppingCartService.add(this.product);
  }
}
