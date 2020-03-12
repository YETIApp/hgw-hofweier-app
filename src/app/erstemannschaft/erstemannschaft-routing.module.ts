import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErstemannschaftPage } from './erstemannschaft.page';

const routes: Routes = [
  {
    path: '',
    component: ErstemannschaftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErstemannschaftPageRoutingModule {}
