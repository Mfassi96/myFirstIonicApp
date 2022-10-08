import { Component, OnInit} from '@angular/core';
import { Route } from '@angular/router';
import { PlacesService } from './places.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places=[];

  constructor(private placesService: PlacesService, @Inject(String) private router: Route) {
  }

  ngOnInit() {
    this.places=this.placesService.getPlaces();
  }

  ionViewWillEnter(){
    this.places=this.placesService.getPlaces();
  }


  addNewPlace(){
    //logica para el boton add place
  }

}
