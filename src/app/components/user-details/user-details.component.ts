import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { UserFavouriteRepo, UserRepo, Users } from 'src/app/model';
import { UserFacade } from 'src/app/services';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDeatailsComponent implements OnInit {
  users$:Observable<Users[]> =this.userFacade.users$;
  userRepos$:Observable<UserRepo | null> =this.userFacade.userRepos$;
  constructor(private userFacade:UserFacade){

  }
  ngOnInit() {
     this.userFacade.getUsers();
  }
  selectChange(event:string){
    this.userFacade.getUserRepos(event);
  }
  favouriteRepoChange(event:UserFavouriteRepo){
    this.userFacade.updateFavouriteRepo(event);
  }
}