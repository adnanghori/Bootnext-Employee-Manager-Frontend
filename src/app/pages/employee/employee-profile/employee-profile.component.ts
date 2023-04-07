import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  user:any = null;
  employee:any = null;
  constructor(private loginService: LoginService,private employeeService:EmployeeService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      (data)=>{
        this.user=data;
        this.employeeService.getEmployee(this.user.email).subscribe(
          (employee:any)=>{
            this.employee = employee;
            employee.dateOfJoining = new Date(employee.dateOfJoining);
          }
        )
      },
      (error)=>{
  
      }
      )
      
    }
    update(){
      
      this.snack.open('Contact HR ','OK',{
        duration : 3000
      })
    }
  }

