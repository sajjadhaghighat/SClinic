import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private pservice:PostService) { }

  ngOnInit() {
    this.pservice.getPostList();
  }
  tiles: Tile[] = [
    {text: 'مدیریت پزشکان', cols: 2, rows: 1, color: '',link:''},
    {text: 'مدیریت پست', cols: 2, rows: 1, color: '',link:'post-management'},
    {text: 'مدیریت درخواست ها', cols: 2, rows: 1, color: '',link:''},
    {text: 'مدیریت اعضا', cols: 2, rows: 1, color: '',link:''},
     {text: 'مدیریت ویزیت', cols: 4, rows: 1, color: '',link:''}
  ];

}
