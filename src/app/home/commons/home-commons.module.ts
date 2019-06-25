import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentsModule } from './components/home-components.module';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentsModule
  ],
  exports: [
    HomeComponentsModule
  ]
})
export class HomeCommonsModule {}
