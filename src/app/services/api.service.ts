import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {ApiConfig} from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  baseUrl : string = ApiConfig.baseUrl;

  constructor(private http: HttpClient) {
  }

  getItems(route: string) {
    return this.http.get<T[]>(this.baseUrl + route);
  }
}
