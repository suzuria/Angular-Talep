import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { talepNesnesi } from './models/gonderi.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient  ) { }
    
}


//apiUrl'i app.module dosyasında tanımladım.



// export class TodoService {

//   constructor(
//     //@Inject('apiUrl') private apiUrl,
//     private http: HttpClient  ) { }

//     // addTalep(talepNesnesi) {
//     //   return this.http.post(this.apiUrl + '/Kullanicis', obj);
//     // }

//     // getirTalep() {
//     //   return this.http.get(this.apiUrl + '/Kullanicis');
//     // }

//     // getirTalepByID(id) {
//     //   return this.http.get(this.apiUrl + '/Kullanicis/' + id);
//     // }

//     // updateTodo(obj) {
//     //   return this.http.put(this.apiUrl + '/Kullanicis/', obj);
//     // }

//     // removeTodo(id) {
//     //   return this.http.delete(this.apiUrl + '/Kullanicis/' + id);
//     // }

// }


// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TodoService {

// //   constructor() { 
// //     ///Kullanicis/

// //   }
// // }
