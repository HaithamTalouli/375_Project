import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-valo-create-post',
  templateUrl: './valo-create-post.component.html',
  styleUrls: ['./valo-create-post.component.css']
})
export class ValoCreatePostComponent implements OnInit {
  postTitle: string;
  postContent: string;
  constructor() { }

  ngOnInit(): void {
  }

  post(): void {
    AppService.addValoPost(ApiserviceService.user.username, this.postTitle, this.postContent)
  }

}
