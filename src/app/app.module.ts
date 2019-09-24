import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { ExportAsModule, ExportAsService } from 'ngx-export-as';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './service/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamleadDashboardComponent } from './teamlead-dashboard/teamlead-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TeamleadDashboardComponent,
    AdminDashboardComponent,
    NotFoundComponent,
    HomeComponent,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExportAsModule
  ],
  providers: [AuthGuard,LoginService,ExportAsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
