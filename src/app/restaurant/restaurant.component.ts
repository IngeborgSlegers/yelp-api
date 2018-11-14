import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  businesses: Restaurant[];

  displayResults: FormGroup;

  // x = Math.floor((Math.random() * 100) + 1);

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder) { }

  ngOnInit() {
    this.displayResults = this.fb.group({
      price: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })

  }

  getRestaurants(): void {
    this.restaurantService.getResults(this.displayResults.value.price, this.displayResults.value.city, this.displayResults.value.state).subscribe(businesses => {this.businesses = businesses
    console.log(this.businesses)
    })
  }


}
