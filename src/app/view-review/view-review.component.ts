import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  @Input() childSelectedReview: Review;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();

  editButtonClicked(reviewToEdit: Review) {
    this.clickSender.emit(reviewToEdit);
  }


}
