import { Component, OnInit } from '@angular/core';
//import { Title } from '@angular/platform-browser';
//import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
//   form: any = {
//     username: null,
//     password: null
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';


//   constructor(private authService: AuthService) { } 
// services tanımladıktan sonra bu yorumları kaldırabiliriz
  constructor() { }

  ngOnInit(): void {
  }
  
//   onSubmit() {
    
//     const { username, password } = this.form;
//     alert(username.value);
//     alert(password.value);
   // this.submitted = true;
//
   // // reset alerts on submit
   // this.alertService.clear();
//
   // // stop here if form is invalid
   // if (this.form.invalid) {
   //     return;
   // }
//
   // this.loading = true;
   // this.accountService.login(this.f.username.value, this.f.password.value)
   //     .pipe(first())
   //     .subscribe({
   //         next: () => {
   //             // get return url from query parameters or default to home page
   //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   //             this.router.navigateByUrl(returnUrl);
   //         },
         //   error: error => {
         //       this.alertService.error(error);
         //     this.loading = false;
         //   }
      // });
}
  
//}
