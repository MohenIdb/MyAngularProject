import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { map } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

//@Injectable({
//  providedIn: 'root'
//})
export class BloodBankService {

  constructor(private http: Http) { }

  create(bloodBank: any) {
    return this.http.post('/api/bloodBanks', bloodBank).pipe(map(res => console.log(res.json())));
  }
  getBloodBank(id: any) {
    return this.http.get('/api/bloodBanks/' + id).pipe(map(res => res.json()));
  }

  update(bloodBank: any, id: any) {
    return this.http.put('/api/bloodBanks/' + id, bloodBank).pipe(map(res => res.json()));
  }

  delete(id: any) {
    return this.http.delete('/api/bloodBanks/' + id).pipe(map(res => res.json()));
  }

  getBloodBanks() {
    return this.http.get('/api/bloodBanks/').pipe(map(res => res.json()));
  }

}
