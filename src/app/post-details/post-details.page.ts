import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  data;
  url: string = 'https://hgw-hofweier.de/'
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient, ) {
    let id = this.route.snapshot.paramMap.get('postId');
    this.getPostDetails(id).subscribe(res => {
      this.data = res;
    });
  }

  getPostDetails(id) {
    const route = this.url + 'wp-json/wp/v2/' + `posts/${id}?_embed`
    return this.http.get(route).pipe()
  }


  ngOnInit() {
    AdMob.hideBanner();
  }

}