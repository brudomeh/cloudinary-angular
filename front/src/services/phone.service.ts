import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(public http: Http) { }
  getList() {
    return this.http.get(`${this.BASE_URL}/api/phone`).pipe(
      map((res) => res.json())
    );
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/phone/${id}`).pipe(
      map((res) => res.json())
    );
  }

  add(phone) {
    return this.http.post(`${this.BASE_URL}/api/phone`, phone).pipe(
      map((res) => res.json())
    );
  }

  edit(phone) {
    return this.http.put(`${this.BASE_URL}/api/phone/${phone.id}`, phone).pipe(
      map((res) => res.json())
    );
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/phone/${id}`).pipe(
      map((res) => res.json())
    );
  }

}
