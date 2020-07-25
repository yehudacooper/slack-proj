import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
configUrl = 'https://5f1454342710570016b37e3e.mockapi.io/api/users';
users: User[];
chosenUser: User;
// chosenUser: User = {id: 1, name: 'yehuda', createdAt: new Date(), posts: 'hhh'};

singleUser: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) {
    // this.getConfig();
   }

getConfig() {
  return this.http.get<User[]>(this.configUrl);
  // .subscribe(data => this.users = data );
}
}
