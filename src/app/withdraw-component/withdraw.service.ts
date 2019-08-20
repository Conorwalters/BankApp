import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WithdrawService {

    constructor(private http: HttpClient) { }

    withdraw(amount: number): Observable<any> {
        const url = 'http://localhost:9999/api/withdraw';
        const body = {amount};
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post(url, body, {headers});
    }
}
