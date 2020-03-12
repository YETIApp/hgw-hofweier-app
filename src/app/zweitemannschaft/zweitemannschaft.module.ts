import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZweitemannschaftPageRoutingModule } from './zweitemannschaft-routing.module';

import { ZweitemannschaftPage } from './zweitemannschaft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZweitemannschaftPageRoutingModule
  ],
  declarations: [ZweitemannschaftPage]
})
export class ZweitemannschaftPageModule {}
