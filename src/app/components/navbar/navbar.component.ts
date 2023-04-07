import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public role:any;
  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
   
  }
  public logout(){
    this.loginService.logOut();
    this.router.navigate([''])
  }
  public dashboard(){
    this.role = this.loginService.getUserRole();
    if(this.role=="ROLE_EMPLOYEE"){
      this.router.navigate(['/employee'])
    }
    else if (this.role=='ROLE_HR'){
      this.router.navigate(['/admin'])
    }
    else if (this.role=='ROLE_MANAGER')
    this.router.navigate(['/manager'])
  }
}
