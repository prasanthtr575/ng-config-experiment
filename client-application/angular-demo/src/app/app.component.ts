import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loading...';

  private _headers = new Headers({'Content-Type': 'application/json'});
  //private _contactsUrl = 'src/apiData/data.json';  // URL to web api
  private _url = environment.apiUrl + 'mock';  // URL to web api

  constructor(private _http: Http) {}

  ngOnInit() {
    this.getData().subscribe(data => this.title = data.data);
  }

  getData () {
    return this._http.get(this._url)
              .map((response: Response)=>response.json() as any);
  }
}
