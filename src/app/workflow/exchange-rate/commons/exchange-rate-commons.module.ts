import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateServicesModule } from './services/exchange-rate-services.module';
import { PipeCommonModule } from './pipes/pipe-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExchangeRateServicesModule,
    PipeCommonModule
  ],
  exports: [
    CommonModule,
    ExchangeRateServicesModule,
    PipeCommonModule
  ]
})
export class ExchangeRateCommonModule { }
