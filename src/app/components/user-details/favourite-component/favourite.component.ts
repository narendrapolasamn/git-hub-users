import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'favourite-component',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
 @Input() isFavourite:boolean=false;
 @Output() favouriteChange= new EventEmitter();

  ngOnInit() {
  
  }
  favouriteClick(){
    this.isFavourite =!this.isFavourite
    this.favouriteChange.emit(this.isFavourite)
  }
}