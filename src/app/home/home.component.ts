import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../models/review.model'
import { REVIEWS } from '../mock-reviews';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ReviewService]
})

export class HomeComponent implements OnInit {

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }

  goToDetailPage(clickedReview: Review) {
    this.router.navigate(['reviews', clickedReview.id]);
  };

}
