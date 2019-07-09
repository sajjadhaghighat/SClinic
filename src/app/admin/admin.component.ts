import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tiles: Tile[] = [
    {text: 'مدیریت پزشکان', cols: 2, rows: 3, color: '#663399'},
    {text: 'مدیریت پست', cols: 2, rows: 3, color: '#008080'},
    {text: 'تنظیمات', cols: 2, rows: 4, color: '#1E90FF'},
    {text: 'مدیریت اعضا', cols: 2, rows: 2, color: '#2F4F4F'},
     {text: 'مدیریت ویزیت', cols: 2, rows: 2, color: '#696969'}
  ];

}
