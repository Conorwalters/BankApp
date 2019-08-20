import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BalanceService  {
   constructor(private http: HttpClient) { }
   CheckBalance() {
        const url = 'http://localhost:9999/api/balance';
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(url);
    }
}
