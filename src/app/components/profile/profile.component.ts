import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  email: string;
  constructor() { 
    this.username = ApiserviceService.user.username;
    this.email = ApiserviceService.user.email;
  }

  ngOnInit(): void {
  }

  changeUsername(){
    
  }
}
