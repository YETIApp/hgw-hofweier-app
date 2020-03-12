import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZweitemannschaftPage } from './zweitemannschaft.page';

const routes: Routes = [
  {
    path: '',
    component: ZweitemannschaftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZweitemannschaftPageRoutingModule {}
