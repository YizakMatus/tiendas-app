import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceProductsPage } from './commerce-products.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceProductsPageRoutingModule {}
