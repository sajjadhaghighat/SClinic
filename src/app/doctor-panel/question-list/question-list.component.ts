import { Component, OnInit } from '@angular/core';
import { IVisit } from 'src/app/Models/visit.model';
import { VisitService } from 'src/app/Services/visit.service';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  userVisits: IVisit[];
  constructor(public vservice:VisitService,private dservice:DoctorsService) { }

  ngOnInit() {

    this.userVisits = this.vservice.visitList.filter(x=> x.MCC == null && x.Cate == this.dservice.selectedDoctor.Expert);
  }

}
