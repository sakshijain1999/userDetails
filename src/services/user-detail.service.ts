import { Injectable,Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  apiUrl = environment.rootUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAllUser() {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  getUser(id) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
  EditUser(id,body) {
    return this.http.get(`${this.apiUrl}/users/${id}`,body);
  }
  
}
