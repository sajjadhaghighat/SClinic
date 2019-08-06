import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute,private pservice:PostService) { }
  
  ngOnInit() {
    
    console.log(this.route.snapshot.params['id']);
    this.pservice.getPost(+this.route.snapshot.params['id']);
  }

}
