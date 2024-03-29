import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const reqClone = request.clone({
      url: environment.baseUrl + "/" + request.url
    })
    return next.handle(reqClone);
  }
}


