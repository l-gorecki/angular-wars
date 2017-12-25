import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  exports: [MatButtonModule],
  declarations: [],
  providers: [ApiService]
})
export class CoreModule { }
