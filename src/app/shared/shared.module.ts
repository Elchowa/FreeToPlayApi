import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AventureTimeService } from '../services/aventure-time.service';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AventureTimeService]
})
export class SharedModule { }
