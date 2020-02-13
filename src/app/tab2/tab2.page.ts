import { Component, OnInit } from '@angular/core';
import { WebsitedataService } from '../websitedata.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;

  constructor(public websiteService: WebsitedataService) {}

  ngOnInit(){
    this.websiteService.getLocalData().subscribe(data => {
      console.log("Remote Data:");
      console.log(this.data);
    });

    fetch('/assets/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
    
    
  }
}
