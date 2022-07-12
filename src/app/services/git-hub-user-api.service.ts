

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class GitHubUserAPIService {

  //this can be also use from environment config
  private readonly apiBaseUrl = environment.usersApiURL; 

  
  constructor(private httpClient: HttpClient) { }

  
  getUsers(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl);
  }
  getUsersRepos(username:string): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl+`/${username}/repos`);
  }
}
