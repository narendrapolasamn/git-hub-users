import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import { UserFavouriteRepo, UserRepo,Users } from "src/app/model";
import { userReducer } from "./app.reducer";
import { AppState, UserState } from "./app.state";

export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
};

export const getUsersState =
  createFeatureSelector<UserState>("userState");

export const userSelect = createSelector(
  getUsersState,
  (state: UserState) => {
    if(state.users)
    {
    return state.users.map((user:any)=>({
      id:user.id,name:user.login
    }))
  }
  return null;
  }
);

export const userRepoSelect = createSelector(
  getUsersState,
  (state:UserState)=>{
    if(state.userRepos){
      let userRepo = state.userRepos[0];
      const repoViewModal = createRepoViewModel(state.userRepos,state.userFavouriteRepo, userRepo?.owner?.login)
      const repoVm:UserRepo = {
        userName : userRepo?.owner?.login,
        profileUrl:userRepo?.owner?.avatar_url,
        url:userRepo?.owner?.url,
        followersUrl:userRepo?.owner?.followers_url,
        type:userRepo?.owner?.type,
        repos:repoViewModal
      }
      return repoVm;
    }
    return null;
  }
);

function createRepoViewModel(userRepo:any,userFavouriteRepo:UserFavouriteRepo[],userName:string){
    if(userFavouriteRepo){
      return userRepo.map((item:any)=> ({ 
        name:item.name,isFavourite:getFavouriteRepo(userFavouriteRepo,userName,item.name)})
      );
    }
    return null;
} 
function getFavouriteRepo(userRepoLike:UserFavouriteRepo[],userName:string,repoName:string){
    if(userRepoLike?.length>0){
      const favouriteRepo = userRepoLike.find(f => f.name === repoName && f.userName === userName);
        return favouriteRepo? favouriteRepo.isFavourite:false;
      
    }
    return false;
}