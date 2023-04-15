import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaveRequestsService } from 'src/app/services/leave-requests.service';

@Component({
  selector: 'app-view-leave-requests',
  templateUrl: './view-leave-requests.component.html',
  styleUrls: ['./view-leave-requests.component.css']
})
export class ViewLeaveRequestsComponent implements OnInit {
leaveRequests:any = null;
  constructor(private leaveRequestService:LeaveRequestsService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.leaveRequestService.getAllLeaveRequests().subscribe(
      (data)=>{
        this.leaveRequests = data;
        this.leaveRequests.forEach(function (value: { createdDate:  any; }) {
          value.createdDate = new Date(value.createdDate).toUTCString()
      })
      },
      (error)=>{
        this.snack.open('Error','OK',{
          duration : 3000
        })
      }
    )
  }
  approve(requestID:any){


    
    this.leaveRequestService.approveLeave(requestID).subscribe(
      (data)=>{
        this.snack.open('Approve','Ok',{
          duration : 3000
        })
        this.ngOnInit()
      }
    )
  }
  reject(requestID:any){

    this.leaveRequestService.rejectLeave(requestID).subscribe(
      (data)=>{
        this.snack.open('Rejected','OK',{duration:3000})
        this.ngOnInit()
      }
    )
  }
}
