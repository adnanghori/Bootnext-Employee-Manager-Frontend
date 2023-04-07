import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeDashboardComponent } from './pages/employee/employee-dashboard/employee-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { SidebarComponent } from './pages/employee/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { EmployeeProfileComponent } from './pages/employee/employee-profile/employee-profile.component';
import { RaiseLeaveRequestComponent } from './pages/employee/raise-leave-request/raise-leave-request.component';
import { LeaveRequestsComponent } from './pages/employee/leave-requests/leave-requests.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AddEmployeeComponent } from './pages/admin/add-employee/add-employee.component';
import { RegisterEmployeeComponent } from './pages/admin/register-employee/register-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmployeeDashboardComponent,
    SidebarComponent,
    EmployeeProfileComponent,
    RaiseLeaveRequestComponent,
    LeaveRequestsComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminProfileComponent,
    AddEmployeeComponent,
    RegisterEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
