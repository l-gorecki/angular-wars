import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { ListViewDetailsComponent } from './list-view-details/list-view-details.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    CoreModule
  ],
  declarations: [ListViewComponent, ListViewDetailsComponent]
})
export class UiModule { }
