import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthInterceptor } from './auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurant: any;
  constructor(private http: HttpClient) { }

  authInterceptor: AuthInterceptor;

  apiKey: string = "Bearer wi-kIEjdYLrnNWJIJ2eo1ZD5oDG2SYubjT33zzjFQi3bF-JOWBCJKhYYN7x6r9QJO3XbzVPBlCv_i1zDhh7SCCRBESKIHBPcWtYVLOfZWiogaLRbM3bbFLApXvjqW3Yx"

  httpOptions = {
    headers: new HttpHeaders({
      // "Content-Type": "application/json",
      Authorization: this.apiKey,
      "X-Requested-With": "application/javascript"
    })
  };

  private yelpUrl = "https://api.yelp.com/v3/businesses";
  private corsUrl = "https://cors-anywhere.herokuapp.com";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getResults(price, city, state): Observable<any> {
    return this.http
    .get(`${this.corsUrl}/${this.yelpUrl}/search?price=${price}&location=${city} ${state}`, this.httpOptions)
    .pipe(catchError(this.handleError("getRestaurants", [])))
  }
}

// `${this.corsUrl}/${this.yelpUrl}/search?price=${price}&location=${city} ${state}&limit=1`