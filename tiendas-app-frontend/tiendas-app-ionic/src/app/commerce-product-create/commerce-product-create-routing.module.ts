import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceProductCreatePage } from './commerce-product-create.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceProductCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceProductCreatePageRoutingModule {}
