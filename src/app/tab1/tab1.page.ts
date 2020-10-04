import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
import { AdOptions, AdSize, AdPosition } from '@capacitor-community/admob';
const { AdMob } = Plugins;

import { HttpClient } from "@angular/common/http"

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //private options: AdOptions = {
    //adId:'ca-app-pub-6148593002584163/7855260590',
    //adSize: AdSize.BANNER,
   // position: AdPosition.BOTTOM_CENTER,
  //  margin: 50,
//}

segmentModel: string = "1";

  usersList:any[]=[]
  usersList2:any[]=[]
  url = 'https://akhromieiev.com';
  constructor(public dataService: DataService, public alertController: AlertController, private http: HttpClient) {  

    

    // Show Banner Ad
    /*AdMob.showBanner(this.options);

    // Subscibe Banner Event Listener
    AdMob.addListener('onAdLoaded', (info: boolean) => {
         console.log("Banner Ad Loaded");
    });

    // Get Banner Size
    AdMob.addListener('onAdSize', (info: boolean) => {
         console.log(info);
    });*/
   }


  async openURL(url) {
    await Browser.open({ 'url': url });
  }

  ngOnInit() {
    this.getHGWData().subscribe(data => {
      this.usersList=data["dataList"];
      console.log(data);
    });

    this.getHGWData2().subscribe(data => {
      this.usersList2=data["dataList"];
      console.log(data);
    });


  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Achtung!',
      message: '<strong>Aufgrund des Coronavirus gelten verschärfte Hygienevorschriften. Wir bitten, diese zu beachten.</strong>',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  
  getHGWData() {
    return this.http.get("https://hgw-hofweier.de/api/hgw1.json");
  }

  getHGWData2() {
    return this.http.get("https://hgw-hofweier.de/api/hgw2.json");
  }

  
}
