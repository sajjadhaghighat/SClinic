import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IUsers } from 'src/app/Models/users.model';
import { IAccounts } from 'src/app/Models/accounts.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser : IUsers;
  selectedAccount : IAccounts;
  userList : IUsers[];
  accountsList : IAccounts[];
  URL : string = 'http://localhost:53358/api/';

  constructor(private http : HttpClient,private cookie :CookieService) { 

  }
  postUser(emp : IUsers){
    console.log(emp);
    return this.http.post(this.URL + 'Users',emp);

  }
  putUser(id : string ,emp : IUsers){
      return this.http.put(this.URL + 'Users/' + id , emp);

  }

  postAccounts(emp : IAccounts){
      return this.http.post(this.URL + 'Accounts',emp);

  }
  
  getUser(){
    this.http.get(this.URL + 'Users/' + this.cookie.get('code'))
    .toPromise().then(res => this.selectedUser = res as IUsers);
    
  }

  getUserList(){
    this.http.get(this.URL + 'Users')
    .toPromise().then(res => this.userList = res as IUsers[]);
    
  }
 
  getAccountsList(){
    this.http.get(this.URL + 'Accounts')
    .toPromise().then(res => this.accountsList = res as IAccounts[]);

  }

  deleteUser(id : string){
    return this.http.delete(this.URL + 'Users/' + id);
  }
  deleteAccounts(id : string){
    return this.http.delete(this.URL + 'Accounts/' + id);
  }
}
