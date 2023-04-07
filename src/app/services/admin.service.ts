import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  public addUser(addEmployee:any){
   return this.http.post(`${baseURL}/api/user/create-employee`,addEmployee);
  }
  public registerEmployee(employeeUser:any){
    return this.http.post(`${baseURL}/api/employee/`,employeeUser)
  }
}
