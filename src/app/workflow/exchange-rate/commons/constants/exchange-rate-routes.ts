import { Route } from '@angular/router';

interface IExchangeRateRoutes {
  base: Route;
  exchangeRateQuote: Route;
}

export const exchangeRateModuleRoutes: IExchangeRateRoutes = {

  base: {
    path: 'exchange-rate-module',
    loadChildren: './workflow/exchange-rate/exchange-rate.module#ExchangeRateModule',
  },
  exchangeRateQuote: {
    path: 'exchange-rate/quote',
    loadChildren: './views/exchange-rate-quote/exchange-rate-quote.module#ExchangeRateQuoteModule',
  }
};

export const redirectByPathToExchangeRateModuleExchangeRateQuote = `/belatrix/${exchangeRateModuleRoutes.base.path}/${exchangeRateModuleRoutes.exchangeRateQuote.path}`;
