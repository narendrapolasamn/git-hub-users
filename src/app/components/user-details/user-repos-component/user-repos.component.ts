import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserFavouriteRepo, UserRepo } from 'src/app/model';
 

@Component({
  selector: 'user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
 @Input() userRepos:UserRepo={};
 @Output() favChanged: EventEmitter<UserFavouriteRepo> = new EventEmitter();
  ngOnInit() {
  
  }
  favouriteChange(event:boolean, repo:any){
       this.favChanged.emit({userName:this.userRepos?.userName,name:repo?.name,isFavourite:event});
  }
}