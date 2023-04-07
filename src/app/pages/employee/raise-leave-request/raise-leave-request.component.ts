import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RaiseLeaveRequestService } from 'src/app/services/raise-leave-request.service';

@Component({
  selector: 'app-raise-leave-request',
  templateUrl: './raise-leave-request.component.html',
  styleUrls: ['./raise-leave-request.component.css']
})
export class RaiseLeaveRequestComponent implements OnInit {

  constructor(private raiseLeaveRequest: RaiseLeaveRequestService,private snack:MatSnackBar) { }
  leaveRequest={
    reason:'',
    numberOfDays : '',   
  }
   ngOnInit(): void {
   }
   requestLeave(){
 
     this.raiseLeaveRequest.requestLeave(this.leaveRequest).subscribe(
       (data)=>{
         this.snack.open('Leave Request Raised','OK',{
           duration : 3000
         })
       },
       (error)=>{
 
       }
     )
   }
}
