import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import  { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { IonicModule } from '@ionic/angular';

import { ErstemannschaftPageRoutingModule } from './erstemannschaft-routing.module';

import { ErstemannschaftPage } from './erstemannschaft.page';

@NgModule({
  imports: [
    CommonModule,
    IonicHeaderParallaxModule,
    FormsModule,
    IonicModule,
    ErstemannschaftPageRoutingModule
  ],
  declarations: [ErstemannschaftPage]
})
export class ErstemannschaftPageModule {}
