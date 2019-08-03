import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private cService:ContactService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.cService.postContact(form.value).subscribe(
      data => {
        
        this.toastr.success('درخواست شما ثبت و بزودی پاسخ داده خواهد شد', 'ارسال پیام');
        this.router.navigate(['/']);
        
      },
      error => {
        
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        
      }
    );
    
    
  } 

}
