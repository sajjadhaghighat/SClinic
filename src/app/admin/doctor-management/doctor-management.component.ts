import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/Services/style.service';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.css']
})
export class DoctorManagementComponent implements OnInit {

  constructor(public styleservice : StyleService,
              public dService : DoctorsService,
              private cookie:CookieService,
              private toastr:ToastrService) { }

  ngOnInit() {
      this.dService.getDoctorList();
      this.dService.selectedDoctor = {
        MCC : '',
        FULLname : '',
        Expert : '',
        Proprietary : '',
        Floship : '',
        Email : '',
        DSex : '',
        Mobile : '',
        Workcity : '',
        Workname : '',
        Workphone : '',
        Workaddress : ''

      };
  }
  select : string;
  getdata(code : string)
  {
    this.select = code;
    this.dService.getDoctorDetail(code);
    this.dService.getAccountsList();
  }
  onDelete()
  {
    this.dService.deleteDoctor(this.select).subscribe(
      data => {
        this.dService.getDoctorList();
        let f = this.dService.daList.find(x=> x.NCode == this.select)
        this.dService.deleteAccounts(f.Username).subscribe(
          data=>{
            this.toastr.success('پزشک با موفقیت حذف شد','پیغام');
          },
          error=>{
            this.toastr.error('اطلاعات حساب پزشک حذف نشد','خطا');
          }
        );
        
      }, 
      error =>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );
  }

  onUpdate(form : NgForm)
  {
    this.dService.putDoctor(this.select,form.value).subscribe(
      data=>{
        this.dService.getDoctorList();
        this.toastr.success('پست با موفقیت بروزرسانی شد','پیغام');
        
      },
      error=>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        
      }
    );
  }


}
