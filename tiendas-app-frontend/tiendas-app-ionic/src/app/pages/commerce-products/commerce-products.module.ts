import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceProductsPageRoutingModule } from './commerce-products-routing.module';

import { CommerceProductsPage } from './commerce-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceProductsPageRoutingModule
  ],
  declarations: [CommerceProductsPage]
})
export class CommerceProductsPageModule {}
