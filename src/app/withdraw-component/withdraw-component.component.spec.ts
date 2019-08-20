import { TestBed } from '@angular/core/testing';
import { WithdrawService } from './withdraw.service';
import {HttpClientTestingModule,
        HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';



describe( 'WithdrawService', () => {
  let service: WithdrawService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WithdrawService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(WithdrawService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // Angular default test added when you generate a service using the CLI
  it('should create withdraw service', () => {
    expect(service).toBeTruthy();
  });

  it('should be called with proper arguments', () => {
    const responseForm = '<form />';
    const withdrawService = TestBed.get(WithdrawService);
    const http = TestBed.get(HttpTestingController);
    let withdrawResponse;

    withdrawService.withdraw(50).subscribe((response) => {
      withdrawResponse = response;
    });

    http.expectOne({
      url: 'http://localhost:9999/api/withdraw',
      method: 'POST'
    }).flush(responseForm);
    expect(withdrawResponse).toEqual(responseForm);
  });

  it('should contain the correct header in the request', () => {
    const responseForm = '<form />';
    const withdrawService = TestBed.get(WithdrawService);
    const http = TestBed.get(HttpTestingController);
    let withdrawResponse;

    withdrawService.withdraw(50).subscribe((response) => {
      withdrawResponse = response;
    });

    http.expectOne((request: HttpRequest<any>) => {
      return request.method === 'POST'
        && request.url === 'http://localhost:9999/api/withdraw'
        && JSON.stringify(request.body) === JSON.stringify({
        amount: 50
        })
        && request.headers.get('Content-Type') === 'application/json';
    }).flush(responseForm);
});
});


