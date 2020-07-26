import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../providers/shopping-cart/shopping-cart.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.page.html",
  styleUrls: ["./shopping-cart.page.scss"],
})
export class ShoppingCartPage implements OnInit {
  products = [];
  total = 0;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.products = this.shoppingCartService.products;
    this.total = this.shoppingCartService.getTotal();
  }

  onRemove(index) {
    this.shoppingCartService.products.splice(index, 1);
    this.products = this.shoppingCartService.products;
    this.total = this.shoppingCartService.getTotal();
  }
}
