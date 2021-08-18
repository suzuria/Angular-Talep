import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path:'',component: HomeComponent },
  { path:'about',component: AboutComponent },
  { path:'login',component: LoginComponent },
  { path:'signup',component: SignUpComponent },
  
  { path:'**',component: NotFoundComponent }, // en alta bunu yazmalısın. Bundan sonra yazdığın sayfaları görüntüleyemezsin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
