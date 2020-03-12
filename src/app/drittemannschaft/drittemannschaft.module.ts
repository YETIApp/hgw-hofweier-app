import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrittemannschaftPageRoutingModule } from './drittemannschaft-routing.module';

import { DrittemannschaftPage } from './drittemannschaft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrittemannschaftPageRoutingModule
  ],
  declarations: [DrittemannschaftPage]
})
export class DrittemannschaftPageModule {}
