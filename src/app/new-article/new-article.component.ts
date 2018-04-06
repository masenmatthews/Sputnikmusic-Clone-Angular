import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})

export class NewArticleComponent {

  @Output() sendArticle = new EventEmitter();

  submitForm(title: string, body: string, id: number) {
    let newArticle: Article = new Article(title, body, id);
    this.sendArticle.emit(newArticle);
  }
}
