import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { DoctorsService } from '../Services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  p: number = 1;
  constructor(public styleservice : StyleService,public dService : DoctorsService) { }

  ngOnInit() {
      this.dService.getDoctorList();
  }

}
