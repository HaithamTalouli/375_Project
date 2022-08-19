import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ValoPostsComponent } from './components/valo-posts/valo-posts.component';
import { CsgoPostsComponent } from './components/csgo-posts/csgo-posts.component';
import { LolPostsComponent } from './components/lol-posts/lol-posts.component';
import { CommunityTabComponent } from './components/home-page/community-tab/community-tab.component';
import { HomePageBodyComponent } from './components/home-page/home-page-body/home-page-body.component';
import { NewsArticleComponent } from './components/home-page/news-article/news-article.component';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './components/rules/rules.component';
import { PostComponent } from './components/post/post.component';
import { CsgoCreatePostComponent } from './components/csgo-create-post/csgo-create-post.component';
import { ValoCreatePostComponent } from './components/valo-create-post/valo-create-post.component';
import { LolCreatePostComponent } from './components/lol-create-post/lol-create-post.component';

// const appRoutes: Routes = [
//   {path: '', component: HomePageComponent},
//   {path: './csgoforum', component: CsgoPostsComponent},
//   {path: './valorantforum', component: ValoPostsComponent},
//   {path: './leagueoflegendsforum', component: LolPostsComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ValoPostsComponent,
    CsgoPostsComponent,
    LolPostsComponent,
    CommunityTabComponent,
    HomePageBodyComponent,
    NewsArticleComponent,
    RulesComponent,
    PostComponent,
    CsgoCreatePostComponent,
    CsgoCreatePostComponent,
    ValoCreatePostComponent,
    LolCreatePostComponent,
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserModule,
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
