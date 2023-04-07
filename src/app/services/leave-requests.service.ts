import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  constructor(private http:HttpClient) { }

  public getEmployeeLeaveRequests(){
    return this.http.get(`${baseURL}/api/leave-request/`);
  }
}
