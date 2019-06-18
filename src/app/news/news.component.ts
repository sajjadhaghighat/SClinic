import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public styleservice:StyleService) { }

  ngOnInit() {
  }

}
