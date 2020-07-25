import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceDetailPage } from './commerce-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceDetailPageRoutingModule {}
