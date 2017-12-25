import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { LoaderService } from './loader.service';
import 'rxjs/add/operator/do';

@Injectable()
export class LoaderHttpInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService
) { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loaderService.hide();
      }
    });
  }
}
