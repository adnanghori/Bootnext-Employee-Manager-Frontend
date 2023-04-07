import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class RaiseLeaveRequestService {

  constructor(private http : HttpClient) { }

  public requestLeave(leaveRequest:any){
    return this.http.post(`${baseURL}/api/leave-request/`,leaveRequest);
  }
}
