import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'asd')
    });

    console.log('Sending request with new header now ...');

    //send the newly created request
    return next.handle(authReq)
  }
}