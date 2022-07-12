import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {Observable} from "rxjs";
import { UserFavouriteRepo, UserRepo,Users } from "../model";
import { getUsers,getUserRepo, updateUserFavourite } from "../store/actions";
import { BaseFacade } from "../store/facade";
import { userRepoSelect, userSelect } from "../store/reducers";




@Injectable({
    providedIn: 'root'
})
export class UserFacade extends BaseFacade {
    constructor(protected override readonly state$: Store<any>) {
        super(state$);
    }
    
    readonly users$:Observable<Users[]> = this.takeAll(userSelect);
    readonly userRepos$:Observable<UserRepo | null> = this.takeAll(userRepoSelect);

    readonly getUsers = () => {
        this.dispatch(getUsers());
    }

    readonly getUserRepos = (userName:string) =>{
        this.dispatch(getUserRepo({userName:userName}))
    }

    readonly updateFavouriteRepo = (favRepo:UserFavouriteRepo) =>{
        this.dispatch(updateUserFavourite({userFavRepo:favRepo}))
    }
}