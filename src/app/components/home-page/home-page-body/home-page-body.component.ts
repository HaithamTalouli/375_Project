import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NewsArticleComponent } from '../news-article/news-article.component';

@Component({
  selector: 'app-home-page-body',
  templateUrl: './home-page-body.component.html',
  styleUrls: ['./home-page-body.component.css']
})
export class HomePageBodyComponent implements OnInit {

  
  constructor(private router: Router) { 
    
  }


  ngOnInit(): void {
  }


}
