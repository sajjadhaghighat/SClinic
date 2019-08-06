import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public styleservice : StyleService,public pservice : PostService) { }

  ngOnInit() {
  }

}
