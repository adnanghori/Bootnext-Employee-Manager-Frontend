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
  public getAllLeaveRequests(){
    return this.http.get(`${baseURL}/api/leave-request/all-leave-requests`)
  }
  public approveLeave(requestID:any){
    
    return this.http.put(`${baseURL}/api/leave-request/approve/${requestID}`,{});
  }
  public rejectLeave(requestID:any){
    return this.http.put(`${baseURL}/api/leave-request/reject/${requestID}`,{});
  }
}
