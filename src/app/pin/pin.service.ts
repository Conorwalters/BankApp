import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PinService {

    constructor(private http: HttpClient) { }

    enterPin(pin: number) {
        const url = 'http://localhost:9999/api/pin';
        const body = {pin};
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post(url, body, {headers});
    }
}
