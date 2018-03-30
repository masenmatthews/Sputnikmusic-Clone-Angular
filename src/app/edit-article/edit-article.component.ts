import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewArticleComponent } from '../view-article/view-article.component';
import { Article } from '../models/article.model'
import { Review } from '../models/review.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {

  constructor() { }
  @Input() childSelectedArticle2: Article;
  @Output() clickedDone = new EventEmitter;
  @Output() clickedDelete = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }

  deleteArticle() {
    this.clickedDelete.emit();
  }

}
