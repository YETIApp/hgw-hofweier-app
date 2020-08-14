import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  ngOnInit() {
    AdMob.resumeBanner();
  }

}
