import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementId: 'tempTable', // the id of html/table element
    
  }
  user:{
    userName:string,
    password:string,
    gender:string
  }
  registerForm: FormGroup;
  submitted = false;

  constructor(public loginService:LoginService,public router:Router,private formBuilder: FormBuilder,private exportAsService: ExportAsService) {
    this.user={
      userName:'',
      password:'',
      gender:''
    }
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.user);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

Check(gender:string){
   this.user.gender=gender;
}

  login(){
    alert("called");
    console.log(this.user);
    this.loginService.login(this.user.userName,this.user.password).subscribe((success:any)=>{
      localStorage.setItem("token",success.access_token); 
      localStorage.setItem("userRole",success.role);
      this.router.navigate(['/home']);
    },(error:any)=>{
      debugger;
      alert(error.error.error_description);
    });
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'CopyExcel').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
  }
}
