import { Component, OnInit } from "@angular/core";
import { CommercesService } from "../../providers/commerces/commerces.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-commerce-detail",
  templateUrl: "./commerce-detail.page.html",
  styleUrls: ["./commerce-detail.page.scss"],
})
export class CommerceDetailPage implements OnInit {
  commerce;

  constructor(
    private commercesService: CommercesService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.commerce = this.commercesService.selectedCommerce;
  }

  onCommerceProducts() {
    this.router.navigateByUrl("/products-list");
  }
}
