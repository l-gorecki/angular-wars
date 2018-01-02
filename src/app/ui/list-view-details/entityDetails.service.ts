import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class EntityDetailsService {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getData(route, state);
  }

  getData(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getResourceDetailsByType(route.params.resource, route.params.id)
      .do(res => console.log('raw res: ', res))
      .flatMap(entity => {
        const referenceKeys = Object.entries(entity)
        .filter(this.isReference)
        .map(([key]) => key);
        return Observable.forkJoin(
          Observable.of(entity),
          ...referenceKeys.map(key => {
            if (entity[key] instanceof Array) {
              // console.log(entity[key])
              // console.log(entity[key].map(value => this.apiService.getResourceByURL(value)))
              const arrayOfObs = entity[key].map(value => this.apiService.getResourceByURL(value));
              return Observable.forkJoin(...arrayOfObs);
            }
            return this.apiService.getResourceByURL(entity[key]);
          })
        )
        // tslint:disable-next-line:no-shadowed-variable
        .map(([entity, ...entities]) => Object.assign(entity, ...entities.map((current, index) => {
          return { [referenceKeys[index]]: current };
        })));
      });
  }

  isReference = ([key, value]) => {
    if (key === 'url' || key === 'resourceType' || key === 'id' || (!isNaN(parseFloat(value)) && isFinite(value))) {
      return;
    }
    if (value instanceof  Array) {
      return value;
    }
    return value.startsWith('https');
  }
}
