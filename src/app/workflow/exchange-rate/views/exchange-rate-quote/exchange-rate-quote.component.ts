import { Component, OnInit } from '@angular/core';
import { ExchangeRateQuoteService } from '../../commons/services/http/exchange-rate-quote.service';

@Component({
  selector: 'app-exchange-rate-quote',
  templateUrl: './exchange-rate-quote.component.html',
  styleUrls: ['./exchange-rate-quote.component.sass']
})
export class ExchangeRateQuoteComponent implements OnInit {

  constructor(private http: ExchangeRateQuoteService) { }

  ngOnInit() {
    debugger;
    this.http.getQuote().subscribe(
      tipoCambio => {
        console.log(tipoCambio);
      },
      error => {
        console.log(error);
      }
    );
  }

}
