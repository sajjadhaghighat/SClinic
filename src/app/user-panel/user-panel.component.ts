import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from '../Services/users.service';
import { VisitService } from '../Services/visit.service';
import { ResponseService } from '../Services/response.service';
import { DoctorsService } from '../Services/doctors.service';

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

  constructor(public cookie:CookieService,
              private uservice :UsersService,
              private vservice : VisitService,
              private rservice:ResponseService,
              private dservice:DoctorsService) { }

  ngOnInit() {
    this.uservice.getUser();
    this.vservice.getVisitList();
    this.rservice.getResponseList();
    this.dservice.getDoctorList();
  }
  tiles: Tile[] = [
    {text: 'پروفایل', cols: 2, rows: 3, color: '' , link : 'user-profile'},
    {text: 'مدیریت سوالات', cols: 2, rows: 4, color: '' , link : 'user-questions'},
    {text: 'حذف حساب', cols: 2, rows: 1, color: 'red', link : 'delete-user'}
    
  ];

}
