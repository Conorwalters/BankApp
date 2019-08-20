import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinEnterComponent } from './pin-enter.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PinService } from '../pin.service';
import { WithdrawService } from 'src/app/withdraw-component/withdraw.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('PinEnterComponent', () => {
  let service: PinService;
  let httpTestingController: HttpTestingController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [PinEnterComponent],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PinService);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create withdraw service', () => {
    expect(service).toBeTruthy();
  });

  it('should be called with proper arguments', () => {
    const responseForm = '<form />';
    const pinservice = TestBed.get(PinService);
    const http = TestBed.get(HttpTestingController);
    let pinResponse;

    pinservice.enterPin(1111).subscribe((response) => {
      pinResponse = response;
    });

    http.expectOne({
      url: 'http://localhost:9999/api/pin',
      method: 'POST'
    }).flush(responseForm);
    expect(pinResponse).toEqual(responseForm);
  });

});
