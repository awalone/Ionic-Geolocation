import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { PlacesService } from '../../services/places-service';
import { DataService } from '../../services/data-service';


/**
 * Generated class for the NewPlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};
  latPlace: number;

  constructor(public navCtrl: NavController, private placesService: PlacesService, private geolocation: Geolocation, private dataService: DataService) {
  }

  ionViewDidLoad(){
    
  }

  onAddPlace(value : { title: string}){
    this.dataService.getAll({title: value.title}).subscribe(response=> {
      this.location.lat = response.results[0].geometry.location.lat; //lat
      this.location.lng = response.results[0].geometry.location.lng; //lng
      console.log(this.location);

      this.placesService.addPlace({title: value.title, location: this.location});
      console.log(this.location)
      this.navCtrl.pop();

    });
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition()
    .then(
      (location) =>{
        console.log('Location fetched successfully');
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
      }
    )
    .catch(
      (error) => console.log("An error occured")
    );

  }

}
