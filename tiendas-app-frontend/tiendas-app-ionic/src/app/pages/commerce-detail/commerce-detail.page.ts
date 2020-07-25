import { Component, OnInit } from "@angular/core";
import { CommercesService } from "../../providers/commerces/commerces.service";

@Component({
  selector: "app-commerce-detail",
  templateUrl: "./commerce-detail.page.html",
  styleUrls: ["./commerce-detail.page.scss"],
})
export class CommerceDetailPage implements OnInit {
  commerce;

  constructor(private commercesService: CommercesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.commerce = this.commercesService.getSelectedCommerce();
  }
}
