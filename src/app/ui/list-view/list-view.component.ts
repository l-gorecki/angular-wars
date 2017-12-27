import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../../core/api.service';
import * as entity from '../../core/core.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  public resourceData: entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship;
  public prevURL: string;
  public nextURL: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const requestedResource: string = params['resource'];
      this.apiService.getResourceByType(requestedResource).subscribe(data => {
        this.resourceData = data.results;
        console.log(this.resourceData)
        this.prevURL = data.previous;
        this.nextURL = data.next;
      });
    });
  }

  private getData(url: string) {
    this.apiService.getResourceByURL(url).subscribe(data => {
      this.resourceData = data.results;
      this.prevURL = data.previous;
      this.nextURL = data.next;
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
