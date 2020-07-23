import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commerce-products',
  templateUrl: './commerce-products.page.html',
  styleUrls: ['./commerce-products.page.scss'],
})
export class CommerceProductsPage implements OnInit {
  products: [];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.load().subscribe(data => {
      this.products = data;
    })
  }

  onAddProduct() {
    this.router.navigateByUrl('/commerce-product-creation');
  }
}
