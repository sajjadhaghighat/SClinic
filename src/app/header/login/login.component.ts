import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputstyle = {
    'font-family':'IRANSans',
    'width': '100%',
    'margin-top':'25px'
  }
  constructor() { }

  ngOnInit() {
  }

}
