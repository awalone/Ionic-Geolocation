import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions }  from "@angular/http";
import { Place } from '../model/place-model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlacesService {
    private places : Place[] = [];
    private gmapsUrl: string = 'http://maps.googleapis.com/maps/api/geocode/json?address=';

    constructor(private storage: Storage, private http: Http){
    }
    
    addPlace(place: Place) {
        this.places.push(place);
        //Check apakah data masuk
        console.log(place);
        this.storage.set('places',this.places);
        
    }
    saveChanges(places: Array<Place>) {
        this.places = places;
        this.storage.set('places', this.places);
   }

    getPlaces() {
        return this.storage.get('places')
            .then(
                (places) => {
                    this.places = places == null ? [] : places;
                    return this.places.slice();
                }
            );
    }
}