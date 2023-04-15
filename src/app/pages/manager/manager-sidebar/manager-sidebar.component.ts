import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css']
})
export class ManagerSidebarComponent implements OnInit {

  constructor(private loginService: LoginService,private snack:MatSnackBar,private route: Router) { }

  ngOnInit(): void {
  }
  public logout(){
    this.loginService.logOut();
    this.snack.open('Logged Out','Ok',{
      duration:3000
    })
    this.route.navigate([''])
  }
}
