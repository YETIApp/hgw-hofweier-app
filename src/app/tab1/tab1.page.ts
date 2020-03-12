import { Component } from '@angular/core';
import { DataService } from '../data.service'
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usersList:any[]=[]
  url = 'https://akhromieiev.com';
  constructor(public dataService: DataService) {   }


  async openURL(url) {
    await Browser.open({ 'url': url });
  }

  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {
      this.usersList=data["dataList"];
      console.log(data);
    });


  }
}
