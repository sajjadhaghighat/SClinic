import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public styleservice:StyleService,private toastr:ToastrService,public cookie:CookieService) { }

  ngOnInit() {
  
  }
  signOut(){
    this.toastr.success('با موفقیت خارج شدید',this.cookie.get('name'));
    this.cookie.delete('role');
    this.cookie.delete('name');
    this.cookie.delete('code');

  }
}
