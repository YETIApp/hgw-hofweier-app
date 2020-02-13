import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  url = 'https://akhromieiev.com';
  constructor() {  }


  async openURL(url) {
    await Browser.open({ 'url': url });
  }

}
