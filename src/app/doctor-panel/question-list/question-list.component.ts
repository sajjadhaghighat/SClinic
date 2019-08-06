import { Component, OnInit } from '@angular/core';
import { IVisit } from 'src/app/Models/visit.model';
import { VisitService } from 'src/app/Services/visit.service';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import { ResponseService } from 'src/app/Services/response.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { IResponse } from 'src/app/Models/response.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  resList : IResponse[];
  userVisits: IVisit[];
  constructor(public vservice:VisitService,
              private dservice:DoctorsService,
              public cookie:CookieService,
              private rservice : ResponseService ,
              private toastr : ToastrService,
              private router: Router,
              private route: ActivatedRoute) { }

  
  ngOnInit() {

    this.userVisits = this.vservice.visitList.filter(x=> x.MCC == null && x.Cate == this.dservice.selectedDoctor.Expert);
  }

  postResponse(form : NgForm)
  {
    console.log(form.value);
    this.rservice.postResponse(form.value).subscribe(
      data=>{
          this.toastr.success('پاسخ سوال با موفقیت ثبت شد','پیغام');
          this.router.navigate(['../'], { relativeTo: this.route });
      },
      error=>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );

  }
}
