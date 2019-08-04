import { Injectable } from '@angular/core';
import { IVisit } from '../Models/visit.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  userVisit : IVisit;
  visitList : IVisit[];
  URL : string = 'http://localhost:53358/api/';

  constructor(private http : HttpClient,private cookie : CookieService) { }

  postVisit(emp : IVisit){
    emp.UNcode = this.cookie.get('code');
    console.log(emp);
    return this.http.post(this.URL + 'Visits',emp);

  }
  putVisit(id : string ,emp : IVisit){
      return this.http.put(this.URL + 'Visits/' + id , emp);

  }


  getVisitList(){
    this.http.get(this.URL + 'Visits')
    .toPromise().then(res => this.visitList = res as IVisit[]);
    
  }
 
  

  deleteVisit(id : string){
    return this.http.delete(this.URL + 'Visits/' + id);
  }
  
}
