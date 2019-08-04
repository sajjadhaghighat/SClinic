import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from '../Services/users.service';
import { VisitService } from '../Services/visit.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link : string;
}

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public cookie:CookieService,private uservice :UsersService,private vservice : VisitService) { }

  ngOnInit() {
    this.uservice.getUser();
    this.vservice.getVisitList();
  }
  tiles: Tile[] = [
    {text: 'پروفایل', cols: 2, rows: 1, color: '' , link : 'user-profile'},
    {text: 'مدیریت سوالات', cols: 2, rows: 1, color: '' , link : 'user-questions'},
    {text: 'حذف حساب', cols: 4, rows: 1, color: 'red', link : ''}
    
  ];

}
