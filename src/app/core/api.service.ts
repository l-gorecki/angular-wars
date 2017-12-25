import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as entity from './core.interface';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ApiService implements Resolve<any> {
  private apiURL = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getResourceDetailsByType(route.params.resource, route.params.id);
  }

  getRoot() {
    return this.http.get(this.apiURL).map(r => {
      let data: any[];
      data = Object.entries(r);
      return data;
    });
  }

  getResourceByType(type: String): Observable<Response> {
    return this.http.get<Response>(this.apiURL + type).map((res: Response) => res);
  }

  getResourceDetailsByType(type: String, id: number): Observable<entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship> {
    return this.http.get<entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship>
      (this.apiURL + type + '/' + id).map(res => res);
  }

  getResourceByURL(url: string): Observable<Response> {
    return this.http.get<Response>(url).map((res: Response) => res);
  }
}


interface Response {
  count: number;
  next: string;
  previous: string;
  results: entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship;
}
