import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { exchangeRateModuleRouterModule } from './exchange-rate.routing';
import { ExchangeRateCommonModule } from './commons/exchange-rate-commons.module';
import { ExchangeRateComponent } from './exchange-rate.component';

@NgModule({
  declarations: [ExchangeRateComponent],
  imports: [
    exchangeRateModuleRouterModule,
    ExchangeRateCommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExchangeRateCommonModule
  ]
})
export class ExchangeRateModule { }
