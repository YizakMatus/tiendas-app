import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommercesService {
  private commerces = [];
  private selectedCommerce;

  constructor(public http: HttpClient) {}

  load(): any {
    if (this.commerces.length) {
      return of(this.commerces);
    }
    return this.http.get("assets/data/commerce-list.json");
  }
}
