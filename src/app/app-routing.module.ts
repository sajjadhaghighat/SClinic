import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotAccessComponent } from './not-access/not-access.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{
    path: '' , component: HomeComponent
},
{
  path: 'user-register' , component: UserRegisterComponent
},
{
  path: 'about-us' , component: AboutUsComponent
},
{
  path: 'contact-us', component: ContactUsComponent
},
{
  path:'**' , component: NotAccessComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
