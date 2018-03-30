import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewArticleComponent } from '../view-article/view-article.component';
import { Article } from '../models/article.model';
import { Review } from '../models/review.model'

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})

export class NewArticleComponent {

  @Output() sendArticle = new EventEmitter();

  submitForm(title: string, body: string) {
    let newArticle: Article = new Article(title, body);
    this.sendArticle.emit(newArticle);
  }
}
