import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
baseUrl:string="http://localhost:50851/";
  constructor(private http:HttpClient) { }

  login(username:string,password:string){
      return this.http.post(this.baseUrl+'/token',"grant_type=password&username="+username+"&password="+password,{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  roleMatch(roles):Boolean{
    debugger;
    var isMatch:boolean=false;
    var userRoles:string[]=JSON.parse(localStorage.getItem("userRole"));
    roles.forEach(element => {
      if(userRoles.indexOf(element)>-1)
        isMatch=true;
      return isMatch;
    });
    return isMatch; 
  }

  getData(){
    let url=this.baseUrl+'api/AdminOnly/id=1';
    return this.http.get(this.baseUrl+'api/AdminOnly/1').pipe(retry(2));
  }


}
