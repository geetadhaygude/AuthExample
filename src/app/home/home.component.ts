import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes:Hero[];
  headingName:string;
  @HostListener('click',['$event'])
  onClickCall(event:Event){
    alert("clicked");
  }
  constructor(private login:LoginService) {
    this.heroes=[
      { name:'Ram',age:10},
      { name:'Laxman',age:20},
      { name:'Ravan',age:30},
    ]

    this.headingName="Hii"
   }
  ngOnInit() {
      this.login.getData().subscribe((success)=>{
        debugger;
        this.headingName=success.toString();
      },(error:HttpErrorResponse)=>{});
  }

  parentFun(e){
    console.log(e);
  }
}
export interface Hero{
  name:string;
  age:number
}
