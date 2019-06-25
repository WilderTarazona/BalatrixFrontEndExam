import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IExchangeRateResponse } from '../../model/response/exchange-rate-get-response.interface';
import { EMessageError } from '../../enums/generic-message-error.enum';
import { IExchangeRateUI } from '../../model/ui/exchange-rate-get-ui.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ExchangeRateQuoteService {

  constructor(
    private http: HttpClient
  ) {}

  getQuote(): Observable<IExchangeRateUI> { //
    const url = `${environment.API_BASE}`;
    return this.http.get<IExchangeRateResponse>(url)
      .pipe(
        map((response) => {
          if (!response.success) {
            throw new Error(EMessageError.GENERIC);
          }

          const exchangeRateUI: IExchangeRateUI = {
              "rates": response.rates
          };

          return exchangeRateUI;
        }
      ));
  }
}
