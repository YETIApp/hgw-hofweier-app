import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsPage } from './uns.page';

const routes: Routes = [
  {
    path: '',
    component: UnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnsPageRoutingModule {}
