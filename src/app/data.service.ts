import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getHGWData(){
    return this.http.get("https://212.227.8.128/api/hgw1.json");

  }

  getHGWData2(){
    return this.http.get("https://hgw-hofweier.de/api/hgw2.json");

  }
}
