import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { RouteConfigLoadStart, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-commerce-product-detail",
  templateUrl: "./commerce-product-detail.page.html",
  styleUrls: ["./commerce-product-detail.page.scss"],
})
export class CommerceProductDetailPage implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.productsService.load().subscribe((data) => {
      const index = this.route.snapshot.paramMap.get("index");
      console.log(data[index]);
      this.product = data[index];
    });
  }
}
