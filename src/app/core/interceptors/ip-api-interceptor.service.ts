import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class IpApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const ipApiRequest = req.clone({
      setParams: {
        apiKey: env.apiKey,
      },
    });
    return next.handle(ipApiRequest);
  }
}
