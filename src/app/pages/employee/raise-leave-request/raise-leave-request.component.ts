import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import { RaiseLeaveRequestService } from 'src/app/services/raise-leave-request.service';

@Component({
  selector: 'app-raise-leave-request',
  templateUrl: './raise-leave-request.component.html',
  styleUrls: ['./raise-leave-request.component.css']
})
export class RaiseLeaveRequestComponent implements OnInit {

  constructor(private raiseLeaveRequest: RaiseLeaveRequestService,private snack:MatSnackBar,private employeeService:EmployeeService) { }
  leaveRequest={
    reason:'',
    numberOfDays : '',   
  }
  employee:any
   ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user')??'')

    
    this.employeeService.getEmployee(user.email).subscribe(
        (data)=>{
          this.employee = data;          
        }
      );

      
     
   }
   requestLeave(){
 
     this.raiseLeaveRequest.requestLeave(this.leaveRequest).subscribe(
       (data)=>{
         this.snack.open('Leave Request Raised','OK',{
           duration : 3000
         })
       },
       (error)=>{
        this.snack.open('Insufficient balance','OK',{duration:3000})
       }
     )
   }
}
