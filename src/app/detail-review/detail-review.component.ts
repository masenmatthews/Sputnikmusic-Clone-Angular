import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewReviewComponent } from '../view-review/view-review.component';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-detail-review',
  templateUrl: './detail-review.component.html',
  styleUrls: ['./detail-review.component.css']
})
export class DetailReviewComponent implements OnInit {

  @Input() childSelectedReview: Review;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();
  editButtonClicked(reviewToEdit: Review) {
    this.clickSender.emit(reviewToEdit);
  }

}
