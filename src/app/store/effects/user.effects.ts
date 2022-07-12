import { Injectable } from "@angular/core";
import { GitHubUserAPIService } from "src/app/services";
import { Actions,createEffect,ofType} from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import * as UserActions from '../actions'
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects{

    constructor(private readonly userAPI:GitHubUserAPIService,
        private readonly actions$:Actions){

    }
    getUsersEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsers),
      mergeMap(action =>
        this.userAPI.getUsers().pipe(
          map((data: any) => {
            return UserActions.getUsersSuccess({ payload: data});
          }),
          catchError((error) => {
            return of(error);
          })
        )
      )
    )
  );
  getUsersRepoEffect$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.getUserRepo),
    mergeMap(action =>
      this.userAPI.getUsersRepos(action.userName).pipe(
        map((data: any) => {
          return UserActions.getUserRepoSuccess({ payload: data});
        }),
        catchError((error) => {
          return of(error);
        })
      )
    )
  )
);
}