import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardUserComponent } from './board-user/board-user.component';

// import { authInterceptorProviders } from './_helpers/auth.interceptor';
// https://www.bezkoder.com/angular-12-jwt-auth/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent
    //ProfileComponent,
    //BoardAdminComponent,
    //BoardModeratorComponent,
    //BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  //providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }