import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  @Input() childSelectedArticle: Article;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();

  editButtonClicked(articleToEdit: Article) {
    this.clickSender.emit(articleToEdit);
  }
}
