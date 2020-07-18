import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: [];

  constructor(public http: HttpClient) { }

  load(): any {
    if (this.products) {
      return of(this.products);
    } else {
      return this.http.get('assets/data/commerce-products.json')
    }
  }
}
