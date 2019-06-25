import { Component, OnInit, HostListener } from '@angular/core';
import { ExchangeRateQuoteService } from './commons/services/http/exchange-rate-quote.service';
import { IExchangeRateUI } from './commons/model/ui/exchange-rate-get-ui.interface';
import { IQuoteUI } from './commons/model/ui/quote-ui.interface';
import { ELoadInterval } from './commons/enums/load-interval.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdNumericPipe } from './commons/pipes/upd-numeric/numeric.pipe';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.sass']
})
export class ExchangeRateComponent implements OnInit {

  exchangeRateIU: IExchangeRateUI;
  arrTypeQuotes: Array<String> = [];
  quote : IQuoteUI = {
    entrada: 0,
    salida: 0,
    typeQuote: "USD",
    tipoCambio: 1
  };
  myForm: FormGroup;

  constructor(
    private http: ExchangeRateQuoteService,
    //private currencyMask: UpdNumericPipe,
    //private builder: FormBuilder
  ) {
    //const maskedVal = val.amount.replace(/(\.\d{2})\d*/, "$1").replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
    /* this.myForm = builder.group({
      amount: ['', Validators.required]
    });
    this.myForm.valueChanges.subscribe(val => {
      if (typeof val.amount === 'string') {
        const maskedVal = this.currencyMask.transform(val.amount);
        if (val.amount !== maskedVal) {
          console.log(val.amount);
          this.myForm.patchValue({amount: maskedVal});
        }
      }
    }); */
  }

  ngOnInit() {
    this.fillRatesName();
    this.getQuote();
    setInterval(() => this.getQuote(), ELoadInterval.TIME);
  }

  private getQuote() {
    this.exchangeRateIU = {
      "rates": {
        "AED": 2.889,
        "USD": 4.563
      }
    };
    /* this.http.getQuote().subscribe(
      result => {
        console.log(result);
        this.exchangeRateIU = result;
      },
      error => {
        console.log(error);
      }
    ); */
  }
  
  calculate() {
    this.quote.tipoCambio = this.exchangeRateIU.rates[this.quote.typeQuote];
    this.quote.salida = this.quote.entrada * this.exchangeRateIU.rates[this.quote.typeQuote];
  }

  private fillRatesName() {
    this.arrTypeQuotes.push("AED");
    this.arrTypeQuotes.push("AFN");
    this.arrTypeQuotes.push("ALL");
    this.arrTypeQuotes.push("AMD");
    this.arrTypeQuotes.push("ANG");
    this.arrTypeQuotes.push("AOA");
    this.arrTypeQuotes.push("ARS");
    this.arrTypeQuotes.push("AUD");
    this.arrTypeQuotes.push("AWG");
    this.arrTypeQuotes.push("AZN");
    this.arrTypeQuotes.push("BAM");
    this.arrTypeQuotes.push("BBD");
    this.arrTypeQuotes.push("BDT");
    this.arrTypeQuotes.push("BGN");
    this.arrTypeQuotes.push("BHD");
    this.arrTypeQuotes.push("BIF");
    this.arrTypeQuotes.push("BMD");
    this.arrTypeQuotes.push("BND");
    this.arrTypeQuotes.push("BOB");
    this.arrTypeQuotes.push("BRL");
    this.arrTypeQuotes.push("BSD");
    this.arrTypeQuotes.push("BTC");
    this.arrTypeQuotes.push("BTN");
    this.arrTypeQuotes.push("BWP");
    this.arrTypeQuotes.push("BYN");
    this.arrTypeQuotes.push("BYR");
    this.arrTypeQuotes.push("BZD");
    this.arrTypeQuotes.push("CAD");
    this.arrTypeQuotes.push("CDF");
    this.arrTypeQuotes.push("CHF");
    this.arrTypeQuotes.push("CLF");
    this.arrTypeQuotes.push("CLP");
    this.arrTypeQuotes.push("CNY");
    this.arrTypeQuotes.push("COP");
    this.arrTypeQuotes.push("CRC");
    this.arrTypeQuotes.push("CUC");
    this.arrTypeQuotes.push("CUP");
    this.arrTypeQuotes.push("CVE");
    this.arrTypeQuotes.push("CZK");
    this.arrTypeQuotes.push("DJF");
    this.arrTypeQuotes.push("DKK");
    this.arrTypeQuotes.push("DOP");
    this.arrTypeQuotes.push("DZD");
    this.arrTypeQuotes.push("EGP");
    this.arrTypeQuotes.push("ERN");
    this.arrTypeQuotes.push("ETB");
    this.arrTypeQuotes.push("USD");
  }

}
