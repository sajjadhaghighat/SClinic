import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(public cookie:CookieService) { }

  ngOnInit() {
  }
  tiles: Tile[] = [
    {text: 'پروفایل', cols: 2, rows: 1, color: '',link:''},
    {text: 'سوالات انتخابی', cols: 2, rows: 1, color: '',link:''},
    {text: 'حذف حساب', cols: 2, rows: 1, color: 'red',link:''},
    {text: 'لیست سوالات', cols: 2, rows: 1, color: '',link:''}
    
  ];

}
