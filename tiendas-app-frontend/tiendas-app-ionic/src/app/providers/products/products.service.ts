import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [];

  constructor(public http: HttpClient) { }

  load(): any {
    if (this.products.length) {
      return of(this.products)
    }
    return this.http.get('assets/data/commerce-products.json')
  }
}
