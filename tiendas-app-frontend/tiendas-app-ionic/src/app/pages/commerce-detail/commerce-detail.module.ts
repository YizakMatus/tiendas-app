import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceDetailPageRoutingModule } from './commerce-detail-routing.module';

import { CommerceDetailPage } from './commerce-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceDetailPageRoutingModule
  ],
  declarations: [CommerceDetailPage]
})
export class CommerceDetailPageModule {}
