import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumbs: 'Home'
    },
    // children: [
    //   {
    //     path: 'list-view/:resource',
    //     loadChildren: './ui/ui.module#UiModule',
    //     data: {
    //       breadcrumbs: 'List View'
    //     }
    //   }
    // ]
  },
  {
    path: 'list-view/:resource',
    loadChildren: './ui/ui.module#UiModule',
    data: {
      breadcrumbs: 'List View'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
