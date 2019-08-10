import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from 'src/app/Models/users.model';
import { IAccounts } from 'src/app/Models/accounts.model';
import { Router } from '@angular/router';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { DoctorsService } from '../Services/doctors.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  UNcodeflag : boolean =false;
  Usernameflag : boolean =false;
  Emailflag : boolean =false;



  constructor(public userService : UsersService, private toastr : ToastrService,private router:Router,private dservice:DoctorsService) { }
  emailPattern = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  ngOnInit() {
    this.resetForm();
    this.userService.getAccountsList();
    this.userService.getUserList();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.reset();
    }
      //this.rpass.nativeElement.value = null;
     
      this.userService.selectedUser = {
      Fname : '',
      Lname : '',
      Email : '',
      Mobile : '',
      UNcode:'',
      IsValid : null,
      Token : ''
    }
    this.userService.selectedAccount = {
      Username : '',
      Password: '',
      Type:'',
      NCode:null
    }
    
  }

  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      data => {
        this.userService.getUserList();
        this.userService.getAccountsList();
        this.dservice.getDoctorList();
        this.toastr.success('ثبت نام شما با موفقیت انجام شد', 'ثبت نام');
        this.router.navigate(['/']);
        let role : IAccounts = {
          Username : form.value.Username,
          Password : form.value.Password,
          Type : 'user',
          NCode : form.value.UNcode
        };
        console.log(role);
        this.userService.postAccounts(role).subscribe(
          data => {
              
               this.toastr.warning('اکانت شما اکنون فعال نیست!  از طریق لینک ارسال شده به ایمیلتان اقدام به فعال سازی اکانت خود کنید','نکته');
     
          },
          error => {
            this.toastr.error('حساب کاربری شما بنا به دلایلی فعال نگردید . با پشتیبانی تماس بگیرید', 'خطا');
            
          }
        );
      },
      error => {
        console.log(error.status);
        if(error.status == 409){
          this.toastr.warning('شناسه کاربری وارد شده قبل در سیستم ثبت شده است','خطا');
        
        }
        else
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        
      }
    );
    
    
  } 

  checkExistsUsername()
  {
    console.log(this.userService.selectedAccount.Username);
    let findUser = this.userService.accountsList;
    let f = findUser.find(x=> x.Username == this.userService.selectedAccount.Username);
    if(f != null)
    {
      this.toastr.error('شناسه کاربری تکراری می باشد','خطا');
      this.Usernameflag =false;
    }
    else
    {
      this.toastr.success('شناسه کاربری در دسترس می باشد','نکته');
      this.Usernameflag =true;
    }
  }
  checkExistsUNcode()
  {
    console.log(this.userService.selectedUser.UNcode);
    let findUser = this.userService.userList;
    let f = findUser.find(x=> x.UNcode == this.userService.selectedUser.UNcode);
    if(f != null)
    {
      this.toastr.error('کد ملی تکراری می باشد','خطا');
      this.UNcodeflag =false;
    }
    else
    {
      this.UNcodeflag =true;
    }
  }
  checkExistsEmail()
  {
    console.log(this.userService.selectedUser.UNcode);
    let findUser = this.userService.userList;
    let f = findUser.find(x=> x.Email == this.userService.selectedUser.Email);
    if(f != null)
    {
      this.toastr.error('ایمیل تکراری می باشد','خطا');
      this.Emailflag =false;
    }
    else
    {
      this.Emailflag =true;
    }
  }
}
