import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DoctorsService } from '../Services/doctors.service';
import { VisitService } from '../Services/visit.service';
import { ResponseService } from '../Services/response.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.css']
})
export class DoctorPanelComponent implements OnInit {

  constructor(public cookie:CookieService,private dservice:DoctorsService,private vservice: VisitService,private rservice:ResponseService) { }

  ngOnInit() {
    this.dservice.getDoctor();
    this.vservice.getVisitList();
    this.rservice.getResponseList();
    this.dservice.getDoctorList();

  }
  tiles: Tile[] = [
    {text: 'پروفایل', cols: 2, rows: 3, color: '',link:'doctor-profile'},
    {text: 'سوالات حوزه تخصص شما', cols: 2, rows: 4, color: '',link:'question-list'},
    {text: 'حذف حساب', cols: 2, rows: 1, color: 'red',link:'delete-doctor'}
        
  ];

}
