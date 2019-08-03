import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotAccessComponent } from './not-access/not-access.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterTabComponent } from './register-tab/register-tab.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { VisitComponent } from './visit/visit.component';
import { ActiveAccountComponent } from './user-register/active-account/active-account.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { UserGuardService } from './Guards/user-guard.service';
import { AdminGuardService } from './Guards/admin-guard.service';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserProfileComponent } from './user-panel/user-profile/user-profile.component';

const routes: Routes = [
{
    path: '' , component: HomeComponent
},
{
  path: 'user-register' , component: UserRegisterComponent 
},
{
  path: 'register-tab' , component: RegisterTabComponent  
},
{
  path: 'active-account/:Token' , component: ActiveAccountComponent
},
{
  path: 'doctor-register' , component: DoctorRegisterComponent  
},
{
  path: 'doctor-panel' , component: DoctorPanelComponent  , canActivate: [UserGuardService]
},
{
  path: 'user-panel' ,
  component: UserPanelComponent  ,
  canActivate: [UserGuardService] ,
  children : [
    {path : 'user-profile' , component : UserProfileComponent}
  ]
},
{
  path: 'doctors-list' , component: DoctorsListComponent
},
{
  path: 'visit' , component: VisitComponent , canActivate: [UserGuardService]
},
{
  path: 'about-us' , component: AboutUsComponent
},
{
  path: 'contact-us', component: ContactUsComponent
},
{
  path:'news' , component: NewsComponent
},
{
  path:'admin' , component: AdminComponent , canActivate: [AdminGuardService]
},
{
  path:'**' , component: NotAccessComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:'enabled'}),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
