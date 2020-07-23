import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceProductCreationPageRoutingModule } from './commerce-product-creation-routing.module';

import { CommerceProductCreationPage } from './commerce-product-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceProductCreationPageRoutingModule
  ],
  declarations: [CommerceProductCreationPage]
})
export class CommerceProductCreationPageModule {}
