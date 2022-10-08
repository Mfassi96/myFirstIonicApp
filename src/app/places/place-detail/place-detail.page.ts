import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute,
     private placesService: PlacesService,
      private router: Router,
      private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      const recipeId=paramMap.get('placeId');
      this.place=this.placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace(){

    const alertElement=await this.alertController.create({
      header: 'Are you sure, you want to delet it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: ()=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.placesService.deletePlace(this.place.id),
            this.router.navigate(['/places']);
          }
        }
      ]
    });


  }

}
