import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title, imageURL){
    //alert('Clicked');
    this.placesService.addPlace(title.value, imageURL.value);
    this.router.navigate(['/places']);
  }

}
