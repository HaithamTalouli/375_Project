import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { CsgoPostsComponent } from './components/csgo-posts/csgo-posts.component';
import { LolPostsComponent } from './components/lol-posts/lol-posts.component';
import { ValoPostsComponent } from './components/valo-posts/valo-posts.component';
import { CsgoCreatePostComponent } from './components/csgo-create-post/csgo-create-post.component';
import { ValoCreatePostComponent } from './components/valo-create-post/valo-create-post.component';
import { LolCreatePostComponent } from './components/lol-create-post/lol-create-post.component';




const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'csgoforum', component: CsgoPostsComponent},
  {path: 'valorantforum', component: ValoPostsComponent},
  {path: 'leagueoflegendsforum', component: LolPostsComponent},
  {path: 'csgocreatepost', component: CsgoCreatePostComponent},
  {path: 'valocreatepost', component: ValoCreatePostComponent},
  {path: 'lolcreatepost', component: LolCreatePostComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
