import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceListPageRoutingModule } from './commerce-list-routing.module';

import { CommerceListPage } from './commerce-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceListPageRoutingModule
  ],
  declarations: [CommerceListPage]
})
export class CommerceListPageModule {}
