import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  addEmployee = {
    email : '',
    password : '',
    username :''
  }
  constructor(private snack:MatSnackBar,private router:Router,private adminService : AdminService) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.addEmployee.email.trim()==''||this.addEmployee.email==null){
      this.snack.open('Email is required','',{
        duration:3000
      });
      return;
    }
    if(this.addEmployee.password.trim()==''||this.addEmployee.password==null){
      this.snack.open('Password is required','',{
        duration:3000
      });
      return;
    }
    if(this.addEmployee.username.trim()==''||this.addEmployee.username==null){
      this.snack.open('Username is required','',{
        duration:3000
      });
      return;
    }
    
    this.adminService.addUser(this.addEmployee).subscribe(
      (data)=>{

        this.router.navigate(['/admin/register-employee/',this.addEmployee.email])
      },
    (error)=>{
      
      this.snack.open('Error','OK',{
        duration : 3000,
      })
    }
    )
  }
}
