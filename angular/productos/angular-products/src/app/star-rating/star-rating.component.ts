import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input() rating!: number;
  auxRating!:number;
  restoreRating(){
  this.auxRating=this.rating
  }
  @Output() ratingChanged = new EventEmitter<number>();
  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }
}
