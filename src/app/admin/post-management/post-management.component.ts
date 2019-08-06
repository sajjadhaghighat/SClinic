import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { StyleService } from 'src/app/Services/style.service';

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
              public styleservice:StyleService) { }

  ngOnInit() {
    
  }
  onSubmit(form : NgForm)
  {
    console.log(form.value);
    this.pservice.postPost(form.value).subscribe(
      data=>{
          this.toastr.success('پست جدید با موفقیت ثبت شد','پیغام');
          this.pservice.getPostList();
          this.router.navigate(['../'], { relativeTo: this.route });
      },
      error=>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );

  }

}
