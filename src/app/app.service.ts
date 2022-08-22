import { Injectable } from '@angular/core';

interface Post {
  user_name: string;
  post_title: string; 
  post_content: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {
  static csgoPosts: Post[] = [];
  static valoPosts: Post[] = [];
  static lolPosts: Post[] = [];
  

  constructor() { 
    let post = {} as Post;
    post.user_name = "name";
    post.post_title = "title";
    post.post_content = "content";
    AppService.csgoPosts = [ post ]
  }

  static addCsgoPost(userName: string, postTitle: string, postContent: string) {
    let post = {} as Post;
    post.user_name = userName;
    post.post_title = postTitle;
    post.post_content = postContent;
    AppService.csgoPosts[AppService.csgoPosts.length]= post ;
  }

  static getCsgoPosts() {
    return AppService.csgoPosts;
  }

  static addValoPost(userName: string, postTitle: string, postContent: string) {
    let post = {} as Post;
    post.user_name = userName;
    post.post_title = postTitle;
    post.post_content = postContent;
    AppService.valoPosts[AppService.valoPosts.length]= post ;
  }

  static getValoPosts() {
    return AppService.valoPosts;
  }

  static addLolPost(userName: string, postTitle: string, postContent: string) {
    let post = {} as Post;
    post.user_name = userName;
    post.post_title = postTitle;
    post.post_content = postContent;
    AppService.lolPosts[AppService.lolPosts.length]= post ;
  }

  static getLolPosts() {
    return AppService.lolPosts;
  }
}
