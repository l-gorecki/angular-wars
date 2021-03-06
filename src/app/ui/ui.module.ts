import { ListTileComponent } from './list-view/list-tile/list-tile.component';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { ListViewDetailsComponent } from './list-view-details/list-view-details.component';
import { MatButtonModule } from '@angular/material';
import { KeysPipe } from './list-view-details/keys.pipe';
import { EntityDetailsService } from './list-view-details/entityDetails.service';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    MatButtonModule
  ],
  declarations: [ListViewComponent, ListViewDetailsComponent, ListTileComponent, KeysPipe],
  providers: [EntityDetailsService]
})
export class UiModule { }
