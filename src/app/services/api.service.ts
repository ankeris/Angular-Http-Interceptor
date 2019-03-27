import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getOne(): Observable<any> {
    const url = 'http://localhost:3001/one';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
  getTwo(): Observable<any> {
    const url = 'http://localhost:3001/two';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
  getThree(): Observable<any> {
    const url = 'http://localhost:3001/three';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
  getFour(): Observable<any> {
    const url = 'http://localhost:3001/four';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
  getFive(): Observable<any> {
    const url = 'http://localhost:3001/five';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
  getSix(): Observable<any> {
    const url = 'http://localhost:3001/six';
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
}
