import { Component, OnInit } from '@angular/core';
import { LeaveRequestsService } from 'src/app/services/leave-requests.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {
  leaveRequests :any =  null;

  constructor(private leaveRequestService : LeaveRequestsService ) { }

  ngOnInit(): void {

    this.leaveRequestService.getEmployeeLeaveRequests().subscribe(
      (data)=>{
        this.leaveRequests = data;
        this.leaveRequests.forEach(function (value: { createdDate:  Date; }) {
          value.createdDate = new Date(value.createdDate)
      },
    
        )

  },
  (error)=>{
    
  }
  
  )

}
}