import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommercesService {
  private commerces = [];
  selectedCommerce;

  constructor(public http: HttpClient) {}

  load(): any {
    if (this.commerces.length) {
      return of(this.commerces);
    }
    return this.http.get("http://localhost:8080/commerce");
  }
}
