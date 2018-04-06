import { Injectable } from '@angular/core';
import { Review } from './models/review.model';
import { REVIEWS } from './mock-reviews';

@Injectable()
export class ReviewService {

  constructor() { }

  getReviews() {
    return REVIEWS;
  }

}
