import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


const API_URL = 'https://localhost:44338/Kullanicis';
//https://www.bezkoder.com/angular-12-jwt-auth/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;
  // constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'text' });
  }

  getUserBoard(id: any): Observable<any> {
    return this.http.get(API_URL + '/id', { responseType: 'text' });
  }

  //   getModeratorBoard(): Observable<any> {
  //     return this.http.get(API_URL + 'mod', { responseType: 'text' });
  //   }

  //   getAdminBoard(): Observable<any> {
  //     return this.http.get(API_URL + 'admin', { responseType: 'text' });
  //   }

  constructor() { }
}






// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:8080/api/test/';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   constructor(private http: HttpClient) { }

//   getPublicContent(): Observable<any> {
//     return this.http.get(API_URL + 'all', { responseType: 'text' });
//   }

//   getUserBoard(): Observable<any> {
//     return this.http.get(API_URL + 'user', { responseType: 'text' });
//   }

//   getModeratorBoard(): Observable<any> {
//     return this.http.get(API_URL + 'mod', { responseType: 'text' });
//   }

//   getAdminBoard(): Observable<any> {
//     return this.http.get(API_URL + 'admin', { responseType: 'text' });
//   }
// }