import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  

  constructor(private service: ApiserviceService, public router: Router) {}

  ngOnInit(): void {
  }

  deleteUser()
  {
    this.service.deleteData(ApiserviceService.user.email).subscribe((res) => {
      console.log(res,'res==>');
    });
    ApiserviceService.emptyUser();
    this.router.navigate(['']);
  }

}
