import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateQuoteService } from './http/exchange-rate-quote.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ExchangeRateQuoteService
  ]
})
export class ExchangeRateServicesModule { }
