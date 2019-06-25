import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateComponent } from './exchange-rate.component';
import { exchangeRateModuleRoutes } from './commons/constants/exchange-rate-routes';

const routes: Routes = [
  {
    path: '',
    component: ExchangeRateComponent,
    children: [
      {
        path: exchangeRateModuleRoutes.exchangeRateQuote.path,
        loadChildren: exchangeRateModuleRoutes.exchangeRateQuote.loadChildren,
      }
    ],
  },
];


export const exchangeRateModuleRouterModule = RouterModule.forChild(routes);
