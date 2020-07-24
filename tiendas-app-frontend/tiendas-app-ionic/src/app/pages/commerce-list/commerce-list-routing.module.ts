import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceListPage } from './commerce-list.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceListPageRoutingModule {}
