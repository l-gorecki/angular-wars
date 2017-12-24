import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public resources: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPath('').map(r => {
      let data: any[];
      data = Object.entries(r);
      return data;
    }).subscribe(data => this.resources = data);
  }

}
