import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateQuoteComponent } from './exchange-rate-quote.component';

const routes: Routes = [
  {
    path: '',
    component: ExchangeRateQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRateQuoteRouting { }
