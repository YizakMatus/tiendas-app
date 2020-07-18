import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products/products.service';

@Component({
  selector: 'app-commerce-products',
  templateUrl: './commerce-products.page.html',
  styleUrls: ['./commerce-products.page.scss'],
})
export class CommerceProductsPage implements OnInit {
  products: [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.load().subscribe(data => {
      this.products = data;
    })
  }
}
