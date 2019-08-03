import { Injectable } from '@angular/core';
import { IDoctors } from '../Models/doctors.model';
import { IAccounts } from '../Models/accounts.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  selectedDoctor : IDoctors;
  doctorList : IDoctors[];
  daList : IAccounts[];
  URL : string = 'http://localhost:53358/api/';
  constructor(private http : HttpClient) { }

  postDoctor(emp : IDoctors){
    console.log(emp);
    return this.http.post(this.URL + 'Doctors',emp);

  }
  putDoctor(id : string ,emp : IDoctors){
      return this.http.put(this.URL + 'Doctors/' + id , emp);

  }

  postAccounts(emp : IAccounts){
      return this.http.post(this.URL + 'Accounts',emp);

  }
  


  getDoctorList(){
    this.http.get(this.URL + 'Doctors')
    .toPromise().then(res => this.doctorList = res as IDoctors[]);
    
  }
 
  getAccountsList(){
    this.http.get(this.URL + 'Accounts')
    .toPromise().then(res => this.daList = res as IAccounts[]);

  }

  deleteDoctor(id : string){
    return this.http.delete(this.URL + 'Doctors/' + id);
  }
  deleteAccounts(id : string){
    return this.http.delete(this.URL + 'Accounts/' + id);
  }
}
