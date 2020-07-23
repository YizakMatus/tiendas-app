import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceProductCreationPage } from './commerce-product-creation.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceProductCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceProductCreationPageRoutingModule {}
