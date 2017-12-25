/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTileComponent } from './list-tile.component';

describe('ListTileComponent', () => {
  let component: ListTileComponent;
  let fixture: ComponentFixture<ListTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
