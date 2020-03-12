import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';

const { Browser } = Plugins;

@Component({
  selector: 'app-erstemannschaft',
  templateUrl: './erstemannschaft.page.html',
  styleUrls: ['./erstemannschaft.page.scss'],
})
export class ErstemannschaftPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  async open(url){

    await Browser.open({url: 'https://hgw-hofweier.de/team/hgw-hofweier/' });
  }

}
