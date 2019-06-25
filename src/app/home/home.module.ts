import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeCommonsModule } from './commons/home-commons.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeCommonsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
