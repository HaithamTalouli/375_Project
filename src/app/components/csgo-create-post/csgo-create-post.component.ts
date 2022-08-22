import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-csgo-create-post',
  templateUrl: './csgo-create-post.component.html',
  styleUrls: ['./csgo-create-post.component.css']
})
export class CsgoCreatePostComponent implements OnInit {

  postTitle: string;
  postContent: string;
  constructor() { }

  ngOnInit(): void {
  }

  post(): void {
    AppService.addCsgoPost(ApiserviceService.user.username, this.postTitle, this.postContent)
  }

}
