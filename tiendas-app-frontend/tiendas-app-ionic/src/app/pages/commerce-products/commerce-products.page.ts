import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { Router } from "@angular/router";
import { AuthService } from "../../providers/auth/auth.service";

@Component({
  selector: "app-commerce-products",
  templateUrl: "./commerce-products.page.html",
  styleUrls: ["./commerce-products.page.scss"],
})
export class CommerceProductsPage implements OnInit {
  products: [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.productsService
      .getProductsByCommerce(this.authService.user.id)
      .subscribe((data: []) => {
        this.products = data;
      });
  }

  onAddProduct() {
    this.router.navigateByUrl("/commerce-product-creation");
  }
}
