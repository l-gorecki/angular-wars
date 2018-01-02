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

        if (event.status === 200 && event.body.results) {
          event.body.results.map(x => {
            const tmp: string[] = x.url.split('/');
            const id: number = +tmp[tmp.length - 2];
            const resourceType: string = tmp[tmp.length - 3];
            Object.assign(x, x, {id: id}, {resourceType: resourceType});
            return x;
          });
        } else if (event.status === 200 && event.body.url) {
            const tmp: string[] = event.body.url.split('/');
            const id: number = +tmp[tmp.length - 2];
            const resourceType: string = tmp[tmp.length - 3];
            Object.assign(event.body, event.body, {id: id}, {resourceType: resourceType});
        }

        this.loaderService.hide();
      }
    });
  }
}
