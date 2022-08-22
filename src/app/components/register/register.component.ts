import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  constructor(private service:ApiserviceService, public router: Router ) { }

  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  });

  registerSubmited(){
    var emailAvailable: boolean = false;
    this.service.getSingleUser(this.registerForm.value.email).subscribe((res)=>{
      console.log(res,'res==>');
      if(res.message === 'data not found'){
        emailAvailable = true;
      }
      else{
        alert("Email is used");
        emailAvailable = false;
      }
      if(this.registerForm.valid && emailAvailable){
        this.service.createData(this.registerForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          ApiserviceService.setRegisteredUser(this.registerForm.value.username as string, this.registerForm.value.email as string, this.registerForm.value.password as string);
          this.registerForm.reset();
        });
        setTimeout(() => {  this.router.navigate(['/home']); }, 80);
      }
    });
  }

  get UserName(): FormControl{
    return this.registerForm.get("username") as unknown as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as unknown as FormControl;
  }

  get PWD(): FormControl{
    return this.registerForm.get("password") as unknown as FormControl;
  }
}
