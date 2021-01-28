import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VorstandPageRoutingModule } from './vorstand-routing.module';

import { VorstandPage } from './vorstand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VorstandPageRoutingModule
  ],
  declarations: [VorstandPage]
})
export class VorstandPageModule {}
