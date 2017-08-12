import { Injectable }   from '@angular/core';
import {Headers, Response, Http, RequestOptions}  from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService{
//   private titles: string;
  private gmapsUrl: string = 'http://maps.googleapis.com/maps/api/geocode/json?address=';

  constructor(private http: Http) {};

  getAll(place: {title:string}) {
    this.gmapsUrl += place.title;
    
    //Cek apakah API bisa digunakan
    console.log(this.gmapsUrl)

    return this.http.get(this.gmapsUrl).map((response: Response) => response.json());
  }

}