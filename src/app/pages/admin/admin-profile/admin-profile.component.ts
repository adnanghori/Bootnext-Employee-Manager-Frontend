import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user:any = null;
  admin:any = null;
  file :any 
  constructor(private loginService: LoginService,private snack:MatSnackBar,private adminService : AdminService) { }

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      (data)=>{
        this.user=data;
        // this.employeeService.getEmployee(this.user.email).subscribe(
        //   (employee:any)=>{
        //     this.employee = employee;
        //     employee.dateOfJoining = new Date(employee.dateOfJoining);
        //   }
        // )
      },
      (error)=>{
  
      }
      )
  }
  upload(){

  }
  selectFile(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
    
  }
}
