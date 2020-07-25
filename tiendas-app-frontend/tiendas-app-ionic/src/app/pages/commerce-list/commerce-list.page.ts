import { Component, OnInit } from "@angular/core";
import { CommercesService } from "../../providers/commerces/commerces.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-commerce-list",
  templateUrl: "./commerce-list.page.html",
  styleUrls: ["./commerce-list.page.scss"],
})
export class CommerceListPage implements OnInit {
  commerces = [];

  constructor(
    private commercesService: CommercesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.commercesService.load().subscribe((data) => {
      this.commerces = data;
    });
  }

  onCommerce(commerce) {
    this.commercesService.selectedCommerce = commerce;
    this.router.navigateByUrl("/commerce-detail");
  }
}
