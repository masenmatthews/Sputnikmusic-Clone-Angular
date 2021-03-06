import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViewReviewComponent } from '../view-review/view-review.component';
import { ShowReviewComponent } from '../show-review/show-review.component';
import { EditReviewComponent } from '../edit-review/edit-review.component';
import { Location } from '@angular/common';
import { Review } from '../models/review.model';
import { ReviewService } from '../review.service';
import { REVIEWS } from '../mock-reviews';

@Component({
  selector: 'app-detail-review',
  templateUrl: './detail-review.component.html',
  styleUrls: ['./detail-review.component.css'],
  providers: [ReviewService]
})
export class DetailReviewComponent implements OnInit {
  reviewId: string;
  reviewToDisplay;

  @Input() childSelectedReview: Review;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.reviewId = (urlParameters['id']);
    });
    this.reviewToDisplay = this.reviewService.getReviewById(this.reviewId);
  }

  @Output() clickSender = new EventEmitter();
  editButtonClicked(reviewToEdit: Review) {
    this.clickSender.emit(reviewToEdit);
  };
}
