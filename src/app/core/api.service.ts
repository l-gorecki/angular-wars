import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as entity from './core.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private apiURL = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

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
}


interface Response {
  count: number;
  next: string;
  previous: string;
  results: entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship;
}
