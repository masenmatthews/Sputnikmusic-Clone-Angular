import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewArticleComponent } from '../view-article/view-article.component';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  @Input() childSelectedArticle: Article;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();
  editButtonClicked(articleToEdit: Article) {
    this.clickSender.emit(articleToEdit);
  }

}
