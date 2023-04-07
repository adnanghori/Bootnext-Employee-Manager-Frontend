import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginData = {
    username : '',
    password : ''

  }
  constructor(private snack:MatSnackBar,private router:Router,private loginservice : LoginService) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.loginData.username.trim()==''||this.loginData.username==null){
      this.snack.open('Username is required','',{
        duration:3000
      });
      return;
    }
    if(this.loginData.password.trim()==''||this.loginData.password==null){
      this.snack.open('Password is required','',{
        duration:3000
      });
      return;
    }
    // request to server
     this.loginservice.generateToken(this.loginData).subscribe(
      (data:any)=>{

        this.loginservice.loginUser(data.token);
       this.loginservice.getCurrentUser().subscribe(
        (user:any)=>{
          this.loginservice.setUser(user);
 
        
          if(this.loginservice.getUserRole()=='ROLE_HR'){
            // admin
            this.router.navigate(['/admin'])
          }
          else if(this.loginservice.getUserRole()=='ROLE_MANAGER')
          {
            //normal
            this.router.navigate(['/user-dashboard'])
          }
          else if (this.loginservice.getUserRole()=='ROLE_EMPLOYEE'){
            this.router.navigate(['/employee'])
          }
          else{
            this.loginservice.logOut();
          }
        }
       )
      },
      (error)=>{

        this.snack.open('invalid details','',{
          duration:3000
        })
      }
     );
  }
}
