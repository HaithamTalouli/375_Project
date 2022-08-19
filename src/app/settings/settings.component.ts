import { ApiserviceService } from './../apiservice.service';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
  }

  deleteUser()
  {
    console.log(ApiserviceService.user.email);
    this.service.deleteData(ApiserviceService.user.email).subscribe((res)=>{
      console.log(res, 'deleteres==>');
    });
  }

}
