import { Component, OnInit } from '@angular/core';
import { VisitService } from '../Services/visit.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  
  constructor(public VService : VisitService,private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.VService.postVisit(form.value).subscribe(
      data => {
        
        this.toastr.success('سوال شما با موفقیت در سامانه ثبت و در اسرع وقت پاسخ داده خواهد شد', 'مشاوره پزشکی');
        this.router.navigate(['/']);
        
      },
      error => {
       
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        
      }
    );
    
    
  } 

}
