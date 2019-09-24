import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TeamleadDashboardComponent } from './teamlead-dashboard/teamlead-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  { path:'',pathMatch:'full',redirectTo:'login'},
  { path:'login',component:LoginComponent },
  { path:'forbidden',component:NotFoundComponent,canActivate:[AuthGuard]},
  { path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  { path:'admin',component:AdminDashboardComponent,canActivate:[AuthGuard],data:{roles:['admin']}},
  { path:'tl',component:TeamleadDashboardComponent,canActivate:[AuthGuard],data:{ roles:['teamlead' ]}},
  { path:'advisor',component:DashboardComponent,canActivate:[AuthGuard], data:{ roles:['advisor']}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
