import { ApiserviceService } from './../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { concat, empty } from 'rxjs';

interface User{
  username: string,
  email: string,
  password: string
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required])
  });

  constructor(private service: ApiserviceService) {}
  

  ngOnInit(): void {
  }

  get email(): FormControl {
    return this.loginForm.get('email') as unknown as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

  loginSubmitted(){
    var user: User;
    this.service.getSingleUser(this.loginForm.value.email).subscribe((res)=>{
      console.log(res,'res==>');
      if(res.message === 'data not found'){
        alert("Email does not exist.");
        return;
      }
      ApiserviceService.setUser(res);
      console.log(ApiserviceService.user);
      var str = JSON.stringify(res);
      var parsedStr = "";
      var previousChar;
      for(var i = 0; i < str.length; i++){
        if(str[i] === ']'){
          break;
        }
        if(previousChar === '['){
          parsedStr += str[i];
        }
        else{
          previousChar = str[i];
        }
      }
      user = JSON.parse(parsedStr);     
      if(user.password != (this.loginForm.value.pwd)){
        alert("Invalid password. Please try again.");
        return;
      }
    });
    console.log(ApiserviceService.user);
  }
}