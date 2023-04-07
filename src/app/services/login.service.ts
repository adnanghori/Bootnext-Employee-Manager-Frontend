import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public generateToken(loginData:any){
    return this.http.post(`${baseURL}/generate-token`,loginData);
  }
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  public getCurrentUser(){
    return this.http.get(`${baseURL}/current-user`);
  }
  public setUser(user:any){ 
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser(){
    let userString = localStorage.getItem('user');
    if(userString!=null) return JSON.parse(userString)
    else {
      this.logOut();
      return null;
    }
  }
  public logOut(){
    localStorage.removeItem('token');
    localStorage.clear();
    return true;
  }
  public getUserRole(){
    let user = this.getUser();
   
      return user.authorities[0].authority;  
  }
  public getTokenFromLocalStorage(){
    
      return localStorage.getItem("token")?.toString();
  }
  public isLoggedIn(){
    let tokenString = localStorage.getItem("token");
    if(tokenString==undefined||tokenString==''||tokenString==null) return false;
    else return true;
  }

}
