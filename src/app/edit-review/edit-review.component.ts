import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../models/review.model'
import { REVIEWS } from '../mock-reviews';
import { ReviewService } from '../review.service';
import { DetailReviewComponent } from '../detail-review/detail-review.component'

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css'],
  providers: [ReviewService]
})
export class EditReviewComponent {

  constructor() { }
  @Input() childSelectedReview: Review;
  @Output() clickedDone = new EventEmitter;
  @Output() clickedDelete = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }

  deleteReview() {
    this.clickedDelete.emit();
  }

}
