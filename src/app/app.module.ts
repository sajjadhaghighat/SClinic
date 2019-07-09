import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material'
import { ToastrModule  } from 'ngx-toastr';


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
    AdminComponent
  ],
  imports: [
    BrowserModule,
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
    ToastrModule.forRoot(
      {toastClass: 'ngx-toastr toastr',positionClass:'toast-top-left'}
    )
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
