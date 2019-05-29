import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public styleservice:StyleService,private toastr:ToastrService) { }

  ngOnInit() {
  
  }

}
