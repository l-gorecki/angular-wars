import { Subscription } from 'rxjs/Subscription';
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
  private sub: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.sub = this.apiService.getRoot().subscribe(data => this.resources = data);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
