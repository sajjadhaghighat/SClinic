import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  label : string ='';
  inputstyle = {
    'font-family':'IRANSans',
    'width': '100%',
    'margin-top':'25px'
  }
  constructor(private userService:UsersService,private dService:DoctorsService,private toastr:ToastrService,private cookie:CookieService,private route : Router) { }

  ngOnInit() {
      this.userService.getUserList();
      this.userService.getAccountsList();
      this.dService.getDoctorList();

  }
  onSubmit(form : NgForm){
    
    let users = this.userService.userList;
    let doctors = this.dService.doctorList;
    let accounts = this.userService.accountsList;
    let a = accounts.find(x => x.Username ==  form.value.Username && x.Password == form.value.Password);
   if(a != null){
     if(a.Type == 'user')
     {
      let fu = users.find(x => x.UNcode ==  a.NCode);
      if(fu.IsValid){
        this.userService.selectedUser = fu;
        this.cookie.set('name',fu.Fname+" "+fu.Lname);
        this.cookie.set('role',a.Type);
        this.cookie.set('code',fu.UNcode);
        this.cookie.set('username',a.Username);
        this.toastr.success('با موفقیت وارد شدید',this.cookie.get('name'));
        this.route.navigate(['/']);
      }
      else{
       
      this.toastr.warning('اکانت شما فعال نیست! ابتدا از طریق لینک ارسال شده به ایمیلتان اقدام به فعال سازی اکانت خود کنید','خطا',{toastClass:'toastr toast',positionClass:'toast-top-left'});
     
      }
     
     }
     else if(a.Type == 'doctor')
     {
      let fu = doctors.find(x => x.MCC ==  a.NCode);
        this.dService.selectedDoctor = fu;
        this.cookie.set('name',fu.FULLname);
        this.cookie.set('role',a.Type);
        this.cookie.set('code',fu.MCC);
        this.cookie.set('username',a.Username);
        this.toastr.success('با موفقیت وارد شدید',this.cookie.get('name'));
        this.route.navigate(['/']);
      
     }
     else if(a.Type == 'admin'){
      this.cookie.set('name','ادمین');
      this.cookie.set('role',a.Type);
      this.toastr.success('با موفقیت وارد شدید',this.cookie.get('name'));
      this.route.navigate(['/']);
     }
      
     else{
      this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      //this.toastr.show('اطلاعات وارد شده صحیح نیست','ورود');
    }
    
      
    }
    else{
      this.toastr.warning('اطلاعات وارد شده صحیح نیست','ورود');
      //this.toastr.show('اطلاعات وارد شده صحیح نیست','ورود');
    }
  }
  

}
