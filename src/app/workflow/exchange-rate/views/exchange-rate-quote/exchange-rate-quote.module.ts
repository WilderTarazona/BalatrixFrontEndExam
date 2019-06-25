import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateCommonModule } from '../../commons/exchange-rate-commons.module';
import { ExchangeRateQuoteComponent } from './exchange-rate-quote.component';
import { ExchangeRateQuoteRouting } from './exchange-rate-quote.routing';

@NgModule({
  declarations: [ExchangeRateQuoteComponent],
  imports: [
    CommonModule,
    ExchangeRateCommonModule,
    ExchangeRateQuoteRouting
  ],
  exports: [
    ExchangeRateQuoteRouting,
  ]
})
export class ExchangeRateQuoteModule { }
