export class Review {
  public photo: string = "";
  //static allReviews = [];
  constructor(public artist: string, public album: string, public genre: string, public description: string, public body: string, public rating: number){
  //  Reviews.allReviews.push(this);
  }

  //add tags later
}
