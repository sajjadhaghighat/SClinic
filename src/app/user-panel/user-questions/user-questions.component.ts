import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/Services/visit.service';
import { IVisit } from 'src/app/Models/visit.model';
import { CookieService } from 'ngx-cookie-service';
import { StyleService } from 'src/app/Services/style.service';
import { ResponseService } from 'src/app/Services/response.service';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  userVisits : IVisit[];
  constructor(public vservice: VisitService,
              private cookie:CookieService,
              public styleservice:StyleService,
              public rservice:ResponseService,
              public dservice:DoctorsService) { }

  ngOnInit() {
    this.userVisits = this.vservice.visitList.filter(x => x.UNcode == this.cookie.get('code'));
    console.log(this.userVisits);
  }

}
