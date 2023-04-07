import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

    public getEmployee(employeeEmail:string){
      
      return this.http.get(`${baseURL}/api/employee/by-email/${employeeEmail}`);
    }
}
