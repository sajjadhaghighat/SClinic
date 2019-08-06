import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { IResponse } from '../Models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  selectedResponse : IResponse;
  responseList : IResponse[];
  URL : string = 'http://localhost:53358/api/';

  constructor(private http : HttpClient,private cookie:CookieService) { }

  postResponse(emp : IResponse){
    console.log(emp);
    return this.http.post(this.URL + 'Responses',emp);

  }
  putResponse(id : number ,emp : IResponse){
      return this.http.put(this.URL + 'Responses/' + id , emp);

  }

  getResponse(RID : number){
    this.http.get(this.URL + 'Responses/' + RID)
    .toPromise().then(res => this.selectedResponse = res as IResponse);
    
  }

  getResponseList(){
    this.http.get(this.URL + 'Responses')
    .toPromise().then(res => this.responseList = res as IResponse[]);
    
  }
 
  deleteResponse(id : number){
    return this.http.delete(this.URL + 'Responses/' + id);
  }
 
}
