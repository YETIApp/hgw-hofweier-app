import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;


import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  

  usersList:any[]=[]
  url = 'https://akhromieiev.com';
  constructor(public dataService: DataService, public alertController: AlertController) {   }


  async openURL(url) {
    await Browser.open({ 'url': url });
  }

  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {
      this.usersList=data["dataList"];
      console.log(data);
    });


  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Achtung!',
      message: '<strong>Aufgrund des Coronavirus ist der Spiel- sowie Trainingsbetrieb auf unbestimmte Zeit ausgesetzt. Wir bitten dies zu entschuldigen.</strong>',
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
}
