import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-commerce-product-creation',
  templateUrl: './commerce-product-creation.page.html',
  styleUrls: ['./commerce-product-creation.page.scss'],
})
export class CommerceProductCreationPage implements OnInit {
  product = {}
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSave(form: NgForm){
    this.submitted = true;

    if (form.valid) {
      console.log(form.value);
      // this.userData.login(this.login.username);
      // this.router.navigateByUrl('/commerce-products');
    }
  }

}
