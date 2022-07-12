import { UserRepo,UserFavouriteRepo } from "src/app/model/"


export interface AppState {
    userState:UserState
}

export interface UserState{
  users:any,
  userRepos:any;
  userFavouriteRepo:UserFavouriteRepo[]
}
