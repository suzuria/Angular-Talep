import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44338/Kullanicis/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  //   ngOnInit() {
  //     //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  //     const body = { Email : ‘a@gmail.com’, sifre : ‘ada’ };
  //     this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
  //         this.postId = data.id;
  //     });
  // }


  //   register( email: string, password: string): Observable<any> {
  //   return this.http.post( AUTH_API + {
  //     email,
  //     password
  //   }, httpOptions);
  // }

  // getUserDetails(username: any, password: any){

  // }


}


//xxammp

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient) { }

//   login(username: string, password: string): Observable<any> {
//     return this.http.post(AUTH_API + 'signin', {
//       username,
//       password
//     }, httpOptions);
//   }

//   register(username: string, email: string, password: string): Observable<any> {
//     return this.http.post(AUTH_API + 'signup', {
//       username,
//       email,
//       password
//     }, httpOptions);
//   }
// }




