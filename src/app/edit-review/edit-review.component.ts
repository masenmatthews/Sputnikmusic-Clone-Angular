import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewReviewComponent } from '../view-review/view-review.component';
import { Article } from '../models/article.model'
import { Review } from '../models/review.model'

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent {

  constructor() { }
  @Input() childSelectedReview2: Review;
  @Output() clickedDone = new EventEmitter;
  @Output() clickedDelete = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }

  deleteReview() {
    this.clickedDelete.emit();
  }

}
