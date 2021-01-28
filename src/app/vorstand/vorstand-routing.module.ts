import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VorstandPage } from './vorstand.page';

const routes: Routes = [
  {
    path: '',
    component: VorstandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VorstandPageRoutingModule {}
