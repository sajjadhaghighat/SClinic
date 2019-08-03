import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css']
})
export class ActiveAccountComponent implements OnInit {

  constructor(public us : UsersService,private Arout : ActivatedRoute,private toastr : ToastrService,private route:Router) { }
  flag : boolean =false;
  error : boolean=false;
  token : string;
  array: string;
  ngOnInit() {
      this.us.getUserList();
      this.token  = this.Arout.snapshot.params['Token'];
      setTimeout(()=>{
        let findUser = this.us.userList;
        let f = findUser.find(x=> x.Token == this.token); 
        this.error = f.IsValid;
      },100);
  }
  update()
  {
      let findUser = this.us.userList;
      console.log(findUser);
      let f = findUser.find(x=> x.Token == this.token);
      f.IsValid = true;
      this.us.putUser(f.UNcode,f).subscribe(
        data => {
          this.us.getUserList();
          this.flag = true;
          this.array = '۵';
          setTimeout(()=>{
            this.array = '۴';
          },1000);
          setTimeout(()=>{
            this.array = '۳';
          },2000);
          setTimeout(()=>{
            this.array = '۲';
          },3000);
          setTimeout(()=>{
            this.array = '۱';
          },4000);
          setTimeout(()=>{
            this.array = '۰';
          },5000);
          setTimeout(()=>{
            this.route.navigate(['/']);
          },6000);
          
          
          
        },
        error => {
          
         
          this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
          
        }
      );
  }

}
