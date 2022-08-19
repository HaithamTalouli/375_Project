import { DOCUMENT, KeyValue } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-lol-posts',
  templateUrl: './lol-posts.component.html',
  styleUrls: ['./lol-posts.component.css']
})
export class LolPostsComponent implements OnInit {
  postList: any[] = AppService.getLolPosts();
  showRules: boolean = false;
  button1: any;
  button2: any;
  constructor(@Inject(DOCUMENT) document: Document) { 
    this.button1 = document.getElementById('button1');
    this.button2 = document.getElementById('button2');
  }

  ngOnInit(): void {
  }

  showRulesFun(): void {
    this.button1 = document.getElementById('button1');
    this.button2 = document.getElementById('button2');
    if (!this.showRules) {
      this.showRules = true;
      if (this.button1 != null && this.button2 != null) {
        this.button1.style.setProperty('text-decoration', 'none');
        this.button2.style.setProperty('text-decoration', 'underline');
      }
    }
  }

  hideRulesFun(): void {
    this.button1 = document.getElementById('button1');
    this.button2 = document.getElementById('button2');
    if (this.showRules) {
      this.showRules = false;
      if (this.button1 != null && this.button2 != null) {
        this.button1.style.setProperty('text-decoration', 'underline');
        this.button2.style.setProperty('text-decoration', 'none');
      }
    }
  }

}
