import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { CommercesService } from "../../providers/commerces/commerces.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.page.html",
  styleUrls: ["./products-list.page.scss"],
})
export class ProductsListPage implements OnInit {
  products = [];

  constructor(
    private productsService: ProductsService,
    private commerceService: CommercesService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.productsService
      .getProductsByCommerce(this.commerceService.selectedCommerce.id)
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  onProduct(product) {
    this.productsService.selectedProduct = product;
    this.router.navigateByUrl("/product-detail");
  }

  onShoppingCart() {
    this.router.navigateByUrl("/shopping-cart");
  }
}
