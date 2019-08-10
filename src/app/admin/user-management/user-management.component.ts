import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { ToastrService } from 'ngx-toastr';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public uservice:UsersService,private toastr:ToastrService,public styleservice:StyleService) { }

  ngOnInit() {
    this.uservice.getUserList();
  }
  select : string;
  getdata(code : string)
  {
    this.select = code;
    this.uservice.getAccountsList();
  }
  onDelete()
  {
    this.uservice.deleteUser(this.select).subscribe(
      data => {
        this.uservice.getUserList();
        let f = this.uservice.accountsList.find(x=> x.NCode == this.select)
        this.uservice.deleteAccounts(f.Username).subscribe(
          data=>{
            this.toastr.success('کاربر با موفقیت حذف شد','پیغام');
          },
          error=>{
            this.toastr.error('اطلاعات حساب کاربر حذف نشد','خطا');
          }
        );
        
      }, 
      error =>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );
  }
}
