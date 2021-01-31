import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;



@Component({
  selector: 'app-uns',
  templateUrl: './uns.page.html',
  styleUrls: ['./uns.page.scss'],
})
export class UnsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCapacitorSite = async () => {
    await Browser.open({ url: 'https://hgw-hofweier.de/impressum' });
  };

}
