import { Component } from '@angular/core';
import { Article } from "./article/article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    this.articles.push(new Article(title.value, link.value,0));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort(
      (a:Article , b:Article)=>b.votes - a.votes 
    )
  }

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('react js', 'http://angular.io', 8),
      new Article('Vu js', 'http://angular.io', 5)
    ];
  }



}
