import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 // import { get } from 'http';
//import { AccountService, AlertService } from '@app/_services';
import {UserService} from 'src/app/services/user.service';  
import { HttpClientModule } from '@angular/common/http';

  @Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
  })
  export class AboutComponent implements OnInit {
    postId: any;
    // http: any;
    // registerForm: FormGroup | undefined;


    //constructor( ) { }
    constructor( private http : HttpClientModule) { }
    // constructor( private Auth: AuthService ) { }
    //  constructor(  private formBuilder: FormBuilder  ) { }
  
    

    // //ÇALIŞAN KOD
    loginUser(event: { preventDefault: () => void; target: any; }) {
      event.preventDefault()
      const target = event.target
      const username = target.querySelector('#username').value
      const password = target.querySelector('#password').value

      console.log(username, password)
      alert(username +" "+ password)
      
    }
    ngOnInit(){

    }

    // ngOnInit() {      
    //   // Simple POST request with a JSON body and response type <any>
    //   this.http.post<('https://localhost:44338/Kullanicis', { title: 'Angular POST Request Example' }).subscribe((data: { id: any; }) => {
    //       this.postId = data.id;
    //   })    }

    // onSubmit(_username: any, password: any) {
    // const { username, password } = this.onSubmit;
    // alert(username.value);
    // alert(password.value);
    // this.submitted = true;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

  //   get() {
  //     // return this.mediaItems;
  //     return this.http.get("/api/MediaItem").map((response: { json: () => any; }) => response.json());
  //  }
    // }

    // çalışıyorr
    // LoginUp(LoginUp: any){
    //   console.log("about. comp giris çalışıyor",LoginUp.value,"yazıldı")
      // this.LoginUp.push(LoginUp.value);

      // this.wait.push(talepEkle.value);
      // talepEkle.value = '';
      // localStorage.setItem('wait', JSON.stringify(this.wait));
    }

  
  
  















// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// //import { AccountService, AlertService } from '@app/_services';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.scss']
// })
// export class AboutComponent implements OnInit {
  
//   form!: FormGroup;
//   loading = false;
//   submitted = false;
//   alertService: any;
//   accountService: any;

//   //AboutForm: FormGroup

//   constructor(   
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router
//     //private accountService: AccountService,
//     //private alertService: AlertService 
//     ) { }

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//   });
//   }
//   get f() { return this.form.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     this.alertService.clear();

//     // stop here if form is invalid
//     if (this.form.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.accountService.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe({
//             next: () => {
//                 // get return url from query parameters or default to home page
//                 const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//                 this.router.navigateByUrl(returnUrl);
//             },
//             error: (error: any) => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             }
//         });
//       }
 
