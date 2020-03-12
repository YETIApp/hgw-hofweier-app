import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrittemannschaftPage } from './drittemannschaft.page';

const routes: Routes = [
  {
    path: '',
    component: DrittemannschaftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrittemannschaftPageRoutingModule {}
