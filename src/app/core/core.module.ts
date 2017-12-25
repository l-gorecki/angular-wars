import { LoaderService } from './loader/loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';
import { LoaderComponent } from './loader/loader.component';
import { LoaderHttpInterceptor } from './loader/loader-http-interceptor.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [MatButtonModule, MatProgressBarModule, LoaderComponent],
  declarations: [
    LoaderComponent
],
  providers: [
    ApiService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderHttpInterceptor,
      multi: true
    }
  ],
})
export class CoreModule { }
