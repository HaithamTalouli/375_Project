import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-lol-create-post',
  templateUrl: './lol-create-post.component.html',
  styleUrls: ['./lol-create-post.component.css']
})
export class LolCreatePostComponent implements OnInit {

  postTitle: string;
  postContent: string;
  constructor() { }

  ngOnInit(): void {
  }

  post(): void {
    AppService.addLolPost(ApiserviceService.user.username, this.postTitle, this.postContent)
  }

}