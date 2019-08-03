import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL : string = 'http://localhost:53358/api/';
  contactList : IContact[];
  constructor(private http : HttpClient) { 

  }
  postContact(emp : IContact){
    console.log(emp);
    return this.http.post(this.URL + 'Contacts',emp);

  }
  putContact(id : string ,emp : IContact){
      return this.http.put(this.URL + 'Contacts/' + id , emp);

  }

  
  getContactList(){
    this.http.get(this.URL + 'Contacts')
    .toPromise().then(res => this.contactList = res as IContact[]);
    
  }
 
  deleteContact(id : string){
    return this.http.delete(this.URL + 'Contacts/' + id);
  }
  
}
