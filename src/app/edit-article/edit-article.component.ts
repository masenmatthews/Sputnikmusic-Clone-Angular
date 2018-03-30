import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model'

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
