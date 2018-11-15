import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: any;
  restaurant: any;

  displayResults: FormGroup;

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder) { }

  ngOnInit() {
    this.displayResults = this.fb.group({
      price: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })

  }

  getRestaurants(): void {
    this.restaurantService.getResults(this.displayResults.value.price, this.displayResults.value.city, this.displayResults.value.state)
    .subscribe(businesses => {
      this.restaurants = businesses.businesses
      let x: number = Math.floor((Math.random() * 19) + 1)  
      this.restaurant = this.restaurants[x]
      console.log(this.restaurant)
      return this.restaurant
    })
  }
}
