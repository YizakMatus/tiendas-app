import { Component, OnInit } from "@angular/core";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { ShoppingCartService } from "../../providers/shopping-cart/shopping-cart.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.page.html",
  styleUrls: ["./shopping-cart.page.scss"],
})
export class ShoppingCartPage implements OnInit {
  products = [];
  total = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private clipboard: Clipboard
  ) {}

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

  private copyStringToClipboard(str) {
    // Create new element
    var el: any = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
  }

  onCopy() {
    const productList = this.shoppingCartService.getProductsList();
    console.log(productList);
    this.clipboard.copy(productList);
    this.copyStringToClipboard(productList.toString());
  }
}
