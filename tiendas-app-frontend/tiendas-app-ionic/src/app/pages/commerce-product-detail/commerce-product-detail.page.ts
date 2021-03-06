import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { RouteConfigLoadStart, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../providers/auth/auth.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-commerce-product-detail",
  templateUrl: "./commerce-product-detail.page.html",
  styleUrls: ["./commerce-product-detail.page.scss"],
})
export class CommerceProductDetailPage implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.productsService
      .getProductsByCommerce(this.authService.user.id)
      .subscribe((data) => {
        const index = this.route.snapshot.paramMap.get("index");
        console.log(data[index]);
        this.product = data[index];
      });
  }

  onDelete() {
    this.productsService.deleteProductById(this.product.id).subscribe(
      (data) => {
        this.navController.back();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
