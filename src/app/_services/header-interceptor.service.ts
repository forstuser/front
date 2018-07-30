import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (true) { // e.g. if token exists, otherwise use incomming request.
      console.log(sessionStorage.getItem('x-csrf-token'))

      return next.handle(req.clone({
        setHeaders: {
          'X-CSRF-TOKEN': sessionStorage.getItem('x-csrf-token'),
          'Content-Type': 'application/json'
        }
      }));
    }
  }
}
