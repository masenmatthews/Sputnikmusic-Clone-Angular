import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  @Input() childReviewList: Review[];
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
  reviewClicked(reviewToView: Review) {
    this.viewSender.emit(reviewToView);
  }

  @Output() newReview = new EventEmitter();
  newReviewClicked() {
    this.newReview.emit();
  }

}
