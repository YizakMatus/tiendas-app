import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductsService } from "../../providers/products/products.service";
import { AuthService } from "../../providers/auth/auth.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-commerce-product-creation",
  templateUrl: "./commerce-product-creation.page.html",
  styleUrls: ["./commerce-product-creation.page.scss"],
})
export class CommerceProductCreationPage implements OnInit {
  product = {};
  submitted = false;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  onSave(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      const product = form.value;
      product.commerceId = this.authService.user.id;
      this.productsService.create(product).subscribe(
        (data) => {
          this.navController.back();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
