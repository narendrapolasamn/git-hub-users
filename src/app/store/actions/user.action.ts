import { createAction, props } from '@ngrx/store';import { UserFavouriteRepo } from 'src/app/model';
;


export const getUsers = createAction(
  '[git hub] get user action'
);

export const getUsersSuccess = createAction(
    '[git hub] get user action success',
    props<{ payload: any }>()
  );

export const getUserRepo = createAction(
  '[git hub] get user repo action',
  props<{userName:string}>()
)

export const getUserRepoSuccess = createAction(
  '[git hub] get user repo action success',
  props<{payload: any}>()
)

export const getUserRepoLike = createAction(
  '[git hub] get user repo like action',
  props<UserFavouriteRepo>()
)

export const updateUserFavourite = createAction(
  '[git hub] upate user repo like action',
  props<{userFavRepo:UserFavouriteRepo}>()
)