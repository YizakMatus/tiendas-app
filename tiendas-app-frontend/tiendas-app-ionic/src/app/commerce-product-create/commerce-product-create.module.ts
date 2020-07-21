import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceProductCreatePageRoutingModule } from './commerce-product-create-routing.module';

import { CommerceProductCreatePage } from './commerce-product-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceProductCreatePageRoutingModule
  ],
  declarations: [CommerceProductCreatePage]
})
export class CommerceProductCreatePageModule {}
