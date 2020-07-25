import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { ShoppingCartService } from "../../providers/shopping-cart/shopping-cart.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
})
export class ProductDetailPage implements OnInit {
  product;

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.product = this.productsService.selectedProduct;
  }

  async onAddToCart() {
    this.shoppingCartService.add(this.product);
    // Create a toast
    const toast = await this.toastController.create({
      position: "middle",
      header: "Producto añadido a la lista de compras",
      duration: 3000,
      buttons: [
        {
          text: "Cerrar",
          role: "cancel",
        },
      ],
    });
    toast.present();
  }
}
