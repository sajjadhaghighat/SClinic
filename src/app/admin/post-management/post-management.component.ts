import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { StyleService } from 'src/app/Services/style.service';
import { CookieService } from 'ngx-cookie-service';
import { SummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  constructor(public pservice:PostService,
              private toastr : ToastrService,
              private router: Router,
              private route : ActivatedRoute,
              public styleservice:StyleService,
              private cookie:CookieService) { }

  ngOnInit() {
    this.pservice.selectedPost = {
      Image : '',
      Title : '',
      Category : '',
      Summary : '',
      Text : '',
      PID: null
    }
  }
  resetForm(form?: NgForm){
    if(form != null)
    {
      form.reset();
    }
  }
  onSubmit(form : NgForm)
  {
    console.log(form.value);
    this.pservice.postPost(form.value).subscribe(
      data=>{
          this.toastr.success('پست جدید با موفقیت ثبت شد','پیغام');
          this.pservice.getPostList();
          
      },
      error=>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );

  }

  setCookie(id : number)
  {
    this.cookie.set('id' , id.toString());
    this.pservice.getPost(id);
  }

  onDelete()
  {
    this.pservice.deletePost(+this.cookie.get('id')).subscribe(
      data => {
        this.pservice.getPostList();
        this.toastr.success('پست با موفقیت حذف شد','پیغام');
        this.cookie.delete('id');
      }, 
      error =>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        this.cookie.delete('id');
      }
    );
  }

  onUpdate(form : NgForm)
  {
    this.pservice.putPost(+this.cookie.get('id'),form.value).subscribe(
      data=>{
        this.pservice.getPostList();
        this.toastr.success('پست با موفقیت بروزرسانی شد','پیغام');
        this.cookie.delete('id');
      },
      error=>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
        this.cookie.delete('id');
      }
    );
  }

}
