export interface UserRepo{
    userName?:string;
    profileUrl?:string;
    url?:string;
    followersUrl?:string;
    type?:string;
    repos?:Repos[];
}
export interface Repos{
    name:string,
    isFavourite:boolean
}