import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebsitedataService {
    id?: number
    date?: number
    title?: string
    data:any;
getApiUrl : string = "https://hgw-hofweier.de/wp-json/sportspress/v2/events";
  constructor(private http: HttpClient) {}

  
  getRemoteData() {
    return this.http.get (
      "https://hgw-hofweier.de/wp-json/sportspress/v2/events"
    );
  }

  getLocalData() {
    return this.http.get (
      "/assets/data.json"
    );
  }

}
