import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatMenuModule,MatRadioModule,MatTabsModule } from '@angular/material'
import { ToastrModule  } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StyleService } from './Services/style.service';
import { NotAccessComponent } from './not-access/not-access.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterTabComponent } from './register-tab/register-tab.component';
import { VisitComponent } from './visit/visit.component';

import { UsersService } from './Services/users.service';
import { ActiveAccountComponent } from './user-register/active-account/active-account.component';
import { DoctorsService } from './Services/doctors.service';
import { VisitService } from './Services/visit.service';
import { CookieService } from 'ngx-cookie-service';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { AdminGuardService } from './Guards/admin-guard.service';
import { UserGuardService } from './Guards/user-guard.service';
import { ContactService } from './Services/contact.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { UserProfileComponent } from './user-panel/user-profile/user-profile.component';
import { DoctorProfileComponent } from './doctor-panel/doctor-profile/doctor-profile.component';
import { UserQuestionsComponent } from './user-panel/user-questions/user-questions.component';
import { QuestionListComponent } from './doctor-panel/question-list/question-list.component';
import { PostManagementComponent } from './admin/post-management/post-management.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { DeleteUserComponent } from './user-panel/delete-user/delete-user.component';
import { DeleteDoctorComponent } from './doctor-panel/delete-doctor/delete-doctor.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { DoctorManagementComponent } from './admin/doctor-management/doctor-management.component';
import { ContactManagementComponent } from './admin/contact-management/contact-management.component';
import { VisitManagementComponent } from './admin/visit-management/visit-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserRegisterComponent,
    AboutUsComponent,
    NotAccessComponent,
    ContactUsComponent,
    NewsComponent,
    DoctorRegisterComponent,
    AdminComponent,
    RegisterTabComponent,
    VisitComponent,
    ActiveAccountComponent,
    DoctorsListComponent,
    UserPanelComponent,
    DoctorPanelComponent,
    UserProfileComponent,
    DoctorProfileComponent,
    UserQuestionsComponent,
    QuestionListComponent,
    PostManagementComponent,
    PostsComponent,
    PostComponent,
    DeleteUserComponent,
    DeleteDoctorComponent,
    UserManagementComponent,
    DoctorManagementComponent,
    ContactManagementComponent,
    VisitManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTabsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(
      {toastClass: 'ngx-toastr toastr',positionClass:'toast-top-left'}
    )
  ],
  providers: [StyleService,UsersService,DoctorsService,VisitService,CookieService,AdminGuardService,UserGuardService,ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
