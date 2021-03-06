import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'show-article-list',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  @Input() childArticleList: Article[];
  @Input() showFormBool: boolean;

  @Output() clickedBool = new EventEmitter;

  displayForm() {
    this.showFormBool = !this.showFormBool;
    this.clickedBool.emit(this.showFormBool);
  }

  constructor() { }

  ngOnInit() {
  }

  @Output() viewSender = new EventEmitter();
  articleClicked(articleToView: Article) {
    this.viewSender.emit(articleToView);
  }

  @Output() newArticle = new EventEmitter();
  newArticleClicked() {
    this.newArticle.emit();
  }

}
