import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeDashboardComponent } from './pages/employee/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './pages/employee/employee-profile/employee-profile.component';
import { EmployeeGuard } from './services/employee.guard';
import { LeaveRequestsComponent } from './pages/employee/leave-requests/leave-requests.component';
import { RaiseLeaveRequestComponent } from './pages/employee/raise-leave-request/raise-leave-request.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AddEmployeeComponent } from './pages/admin/add-employee/add-employee.component';
import { RegisterEmployeeComponent } from './pages/admin/register-employee/register-employee.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'employee',
    component : EmployeeDashboardComponent,
    canActivate : [EmployeeGuard],
    children : [
      {
        path : 'profile',
        component : EmployeeProfileComponent
      },
      {
        path : 'leave-request',
        component : LeaveRequestsComponent
      },
      {
        path : 'raise-leave-request',
        component  : RaiseLeaveRequestComponent
      }
    ]
  },
  {
    path :'admin',
    component : AdminDashboardComponent,
    canActivate :[AdminGuard],
    children :[
      {
        path : 'profile',
        component : AdminProfileComponent
      },
      {
        path : 'add-employee',
        component : AddEmployeeComponent
      },
      {
        path : 'register-employee/:email',
        component : RegisterEmployeeComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
