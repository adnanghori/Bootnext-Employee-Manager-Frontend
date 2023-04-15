import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  employeeUser ={
    employeeName : '',
    employeeEmail : this.activatedRoute.snapshot.paramMap.get('email'),
    totalLeaves : '20',
    designation : '',
    dateOfJoining : ''

  }
  constructor(private activatedRoute: ActivatedRoute,private snack:MatSnackBar,private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    
    
  }
  submit(){

    if(this.employeeUser.employeeName==''||this.employeeUser.employeeName==null){
      //alert('Field required');
      this.snack.open('fields required','',{
        duration:2000,
      })
      return;
    }

    // addUser : userService
    console.log(this.employeeUser);
    
      this.adminService.registerEmployee(this.employeeUser).subscribe(
        (data)=>{
          console.log('success')
          this.snack.open('successfully registered','',{
            duration:3000
          })
          this.router.navigate(['admin'])
          
        },
      (error)=>{
        console.log(error);
        this.snack.open('something went wrong','',{
          duration:3000
        })
        this.router.navigate(['admin/add-employee'])
      }
      )
    
}

}
