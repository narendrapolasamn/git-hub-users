import { Action, createReducer, on, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { UserState } from './app.state';
import { UserFavouriteRepo } from "src/app/model";

export const intialState: UserState = {
  users:null,
  userFavouriteRepo:[],
  userRepos: null
};
export const userReducer = createReducer(
  intialState,
  on(UserActions.getUsersSuccess, (state, payload) => {
    return { ...state, users: payload?.payload };
  }),
  on(UserActions.getUserRepoSuccess, (state, payload) => {
    return { ...state, userRepos: payload?.payload };
  }),
  on(UserActions.updateUserFavourite, (state, payload) => {
    return { ...state, userFavouriteRepo: updateUserFavourite([...state.userFavouriteRepo],payload?.userFavRepo) };
  }),
);

export function reducer(state: any, action: Action) {
  return userReducer(state, action);
}

export function updateUserFavourite(userFavouriteRepo:UserFavouriteRepo[],favouriteRepo:UserFavouriteRepo){
      let favRepoIndex = userFavouriteRepo.findIndex(f=> f.name === favouriteRepo.name && f.userName === favouriteRepo.userName)
      if(favRepoIndex > -1){
        userFavouriteRepo.splice(favRepoIndex,1)
      }
      else{
          userFavouriteRepo.push(favouriteRepo);
                 
        } 
      return userFavouriteRepo;
}