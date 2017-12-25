import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../../core/api.service';
import * as entity from '../../core/core.interface';

@Component({
  selector: 'app-list-view-details',
  templateUrl: './list-view-details.component.html',
  styleUrls: ['./list-view-details.component.css']
})
export class ListViewDetailsComponent implements OnInit {
  public resourceData: entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) {  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const requestedResource: string = params['resource'];
      const id: number = params['id'];
      this.apiService.getResourceDetailsByType(requestedResource, id).subscribe(data => {
        this.resourceData = data;
      });
    });
  }

}
