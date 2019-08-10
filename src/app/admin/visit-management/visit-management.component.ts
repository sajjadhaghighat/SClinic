import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/Services/visit.service';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { CookieService } from 'ngx-cookie-service';
import { ResponseService } from 'src/app/Services/response.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visit-management',
  templateUrl: './visit-management.component.html',
  styleUrls: ['./visit-management.component.css']
})
export class VisitManagementComponent implements OnInit {

  constructor(public vservice:VisitService,
              private dservice:DoctorsService,
              public cookie:CookieService,
              private rservice : ResponseService ,
              private toastr : ToastrService) { }

  ngOnInit() {
    this.vservice.getVisitList();
    this.dservice.getDoctorList();
    this.rservice.getResponseList();
  }
  select : number;
  getdata(code : number)
  {
    this.select = code;
  }
  onDelete()
  {
    this.vservice.deleteVisit(this.select).subscribe(
      data => {
        for (let index = 0; index < this.rservice.responseList.length; index++) {
          if (this.rservice.responseList[index].VID == this.select) {
            this.rservice.deleteResponse(this.rservice.responseList[index].RID).subscribe(
              data=>{},error=>{}
            );
          }
        }
        this.vservice.getVisitList();
        this.toastr.success('سوال با موفقیت حذف شد','');
                
      }, 
      error =>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );
  }

}
