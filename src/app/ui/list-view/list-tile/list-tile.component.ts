import { Component, OnInit, Input } from '@angular/core';
import * as entity from '../../../core/core.interface';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.css']
})
export class ListTileComponent implements OnInit {

  @Input() data: entity.Person | entity.Vehicle | entity.Film | entity.Planet | entity.Species | entity.Starship;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
