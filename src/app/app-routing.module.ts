import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthComponent } from './auth/auth.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteadminComponent } from './deleteadmin/deleteadmin.component';
import { DetailsComponent } from './details/details.component';
// import { DummyComponent } from './dummy/dummy.component';
import { EditComponent } from './edit/edit.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { HomeComponent } from './home/home.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ModifyuserComponent } from './modifyuser/modifyuser.component';
import { RegisterComponent } from './register/register.component';
import { RequestcreateComponent } from './requestcreate/requestcreate.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { RoleGuard } from './shared/role.guard';
import { TravelagentloginComponent } from './travelagentlogin/travelagentlogin.component';

const routes: Routes = [
  {path:'login',component:EmployeeloginComponent,canActivate:[AuthguardGuard]},
  {path:'',component:HomeComponent},
  {path:'Createreq',component:RequestcreateComponent,canActivate:[AuthguardGuard]},
  {path:'Auth',component:AuthComponent},
  {path:'Details',component:DetailsComponent,canActivate:[AuthguardGuard]},
  {path:'delete',component:DeleteComponent,canActivate:[AuthguardGuard]},
  {path:'manager',component:ManagerloginComponent,canActivate:[AuthguardGuard]},
  {path:'travelagent',component:TravelagentloginComponent,canActivate:[AuthguardGuard]},
  {path:'edit',component:EditComponent,canActivate:[AuthguardGuard]},
  {path:'admin',component:AdminloginComponent,canActivate:[AuthguardGuard] && [RoleGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthguardGuard]&& [RoleGuard]},
  {path:'modify',component:ModifyuserComponent,canActivate:[AuthguardGuard]&& [RoleGuard]},
  {path:'editadmin',component:EditadminComponent,canActivate:[AuthguardGuard]&& [RoleGuard]},
  {path:'deleteadmin',component:DeleteadminComponent,canActivate:[AuthguardGuard]&& [RoleGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomp=[EmployeeloginComponent,HomeComponent,RequestcreateComponent,AuthComponent,DetailsComponent,DeleteComponent,ManagerloginComponent,TravelagentloginComponent,EditComponent,AdminloginComponent,RegisterComponent,ModifyuserComponent,EditComponent,DeleteadminComponent]
