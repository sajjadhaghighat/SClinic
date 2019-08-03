import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from '../Services/doctors.service';
import { IAccounts } from '../Models/accounts.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  constructor(public dService : DoctorsService, private toastr : ToastrService,private router:Router) { }

  DUsernameflag: boolean =false;
  
  ngOnInit() {
    this.dService.getAccountsList();
  }
  resetForm(form?: NgForm){
    if(form != null)
    {
      form.reset();
    }
  }
  onSubmit(form: NgForm){
    this.dService.postDoctor(form.value).subscribe(
      data => {
        
        this.toastr.success('ثبت نام شما با موفقیت انجام شد', 'ثبت نام');
        this.router.navigate(['/']);
        let role : IAccounts = {
          Username : form.value.Username,
          Password : form.value.Password,
          Type : 'doctor',
          NCode : form.value.MCC
        };
        console.log(role);
        this.dService.postAccounts(role).subscribe(
          data => {
              
               this.toastr.info('اکانت شما هم اکنون فعال است','نکته');
     
          },
          error => {
            this.toastr.error('حساب کاربری شما بنا به دلایلی فعال نگردید . با پشتیبانی تماس بگیرید', 'خطا');
            
          }
        );
      },
      error => {
        console.log(error.status);
        if(error.status == 409){
          this.toastr.warning('شخصی قبلا با این کد ملی ثبت نام کرده است','خطا');
        
        }
        else
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        
      }
    );
    
    
  } 

  checkExistDUsername(data : string)
  {
    console.log(data);
    let findUser = this.dService.daList;
    let f = findUser.find(x=> x.Username == data);
    if(f != null)
    {
      this.toastr.error('شناسه کاربری تکراری می باشد','خطا');
      this.DUsernameflag =false;
    }
    else
    {
      this.toastr.success('شناسه کاربری در دسترس می باشد','نکته');
      this.DUsernameflag =true;
    }
  }
}
