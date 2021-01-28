import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnsPageRoutingModule } from './uns-routing.module';

import { UnsPage } from './uns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnsPageRoutingModule
  ],
  declarations: [UnsPage]
})
export class UnsPageModule {}
