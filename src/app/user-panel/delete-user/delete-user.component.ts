import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private uservice:UsersService,
              private cookie:CookieService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit() {
  }
  onDeleteAccount()
  {
    this.uservice.deleteAccounts(this.cookie.get('username')).subscribe(
      data=>{
        this.uservice.deleteUser(this.cookie.get('code')).subscribe(
          data=>{
            this.toastr.success('حساب شما با موفقیت حذف شد','پیغام');
            this.router.navigate(['']);
            this.cookie.deleteAll();
          },
          error=>{
            this.toastr.success('حساب شما حذف ولی اطلاعات شما در سیستم باقی ماند','خطا');
          }
        );
      },
      error=>{
        this.toastr.success('ارتباط با سرور برقرار نشد','خطا');
      }
    );
  }
  onBack()
  {
    this.router.navigate(['']);
  }
}
