import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateQuoteComponent } from './exchange-rate-quote.component';

describe('ExchangeRateQuoteComponent', () => {
  let component: ExchangeRateQuoteComponent;
  let fixture: ComponentFixture<ExchangeRateQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
