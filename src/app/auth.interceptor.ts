import { RestaurantService } from './restaurant.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private restaurantService: RestaurantService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const apiKey = this.restaurantService.apiKey;

    const authReq = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', '*'),
    });

    return next.handle(authReq);
  }

}
