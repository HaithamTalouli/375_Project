import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '375_Project';
  username: string;
  constructor(public router: Router) {
    router.events.subscribe(val => {
      this.username = ApiserviceService.user.username;
    });
  }

  signOut() {
    this.router.navigate(['']);
    ApiserviceService.emptyUser();
  }

  takeSearchBarInput(event: any) {
    if (event.target.value.toLowerCase() === "csgo" || event.target.value.toLowerCase() === "counter strike" || event.target.value.toLowerCase() === "cs" || event.target.value.toLowerCase() === "counter strike global offense") {
      this.router.navigate(['/csgoforum']);
    }
    else if (event.target.value.toLowerCase() === "valo" || event.target.value.toLowerCase() === "valorant") {
      this.router.navigate(['/valorantforum']);
    }
    else if (event.target.value.toLowerCase() === "lol" || event.target.value.toLowerCase() === "league" || event.target.value.toLowerCase() === "league of legends") {
      this.router.navigate(['/leagueoflegendsforum']);
    }
    event.target.value = '';
  }
}
