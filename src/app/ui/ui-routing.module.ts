import { EntityDetailsService } from './list-view-details/entityDetails.service';
import { ListViewDetailsComponent } from './list-view-details/list-view-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent
  },
  {
    path: ':id',
    component: ListViewDetailsComponent,
    data: {
      breadcrumbs: '{{ entity.name || entity.title }}'
    },
    resolve: {
      entity: EntityDetailsService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
