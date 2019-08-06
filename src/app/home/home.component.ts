import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public styleservice : StyleService,private toastr : ToastrService,private http:HttpClient,public pservice:PostService) { }
  ngOnInit() {
  }
  postNewletter(form : NgForm)
  {
      console.log(form.value);
      if(form.value.Nemail == "")
      {
        this.toastr.error('لطفا ایمیل خود را وارد کنید','خطا');
      }
      else
      {
        this.http.post('http://localhost:53358/api/NewLetters',form.value).subscribe(
          data=>
          {
            this.toastr.success('ایمیل شما در خبرنامه سامانه ثبت شد','پیغام');
          },
          error=>
          {
            this.toastr.error('مشکل در برقراری ارتباط با سرور . دوباره امتحان کنید','خطا');
          }
        );
      }
  }
}
