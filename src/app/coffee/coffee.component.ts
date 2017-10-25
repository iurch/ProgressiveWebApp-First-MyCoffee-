import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { Coffee } from 'app/logic/Coffee';

import { GeolocationService } from "../geolocation.service";
import { TastingRating } from 'app/logic/TastingRating';
import { DataService } from 'app/data.service';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  tastingEnabled: boolean = false
  routingSubscription: any
  types = ["Expresso","Ristretto","Americano","Cappuccino","Frappe"];
  coffee : Coffee;

  constructor(private route: ActivatedRoute,
                      private geolocation: GeolocationService,
                      private router:Router,
                    private data:DataService) { }

  ngOnInit() {
    this.coffee = new Coffee()
    this.routingSubscription = this.route.params.subscribe(params => {
      // console.log(params['id']);
      if ( params['id']){
        this.data.get(params['id'], response => {
          this.coffee = response
          if ( this.coffee.tastingRating) {
            this.tastingEnabled = true
          }
        })
      }
     });
    this.geolocation.requestLocation(location => {
      if(location) {
        this.coffee.location.latitude = location.latitude
        this.coffee.location.longitude = location.longitude
      }
    })

  }

  ngOnDestroy(){
    this.routingSubscription.unsubscribe()
  }

  tastingRatingChanged({checked}) {
    if(checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null
    }
  }

  cancel(){
    this.router.navigate(['/'])
  }

  save(){
    this.data.save(this.coffee, ressult => {
      if (ressult) {
        this.router.navigate(['/'])
      }
    })
  }
}
