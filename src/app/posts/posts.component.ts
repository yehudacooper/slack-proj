import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // singleUser: Subject<User> = new Subject<User>();
  posts: string;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    // this.userService.singleUser.asObservable().subscribe(data => console.log(data));
    // this.userService.singleUser.next(this.posts);
    this.userService.singleUser.subscribe(data => console.log(data));
    this.userService.singleUser.subscribe(data => this.posts = data.posts);
    // this.userService.singleUser.next(this.userService.chosenUser);
  }
  // show(){
    // this.posts = 'yehuda1';
    // this.userService.singleUser.subscribe(data => {console.log(data); });
    // this.userService.singleUser.next(this.userService.chosenUser);
    // this.userService.singleUser.asObservable().subscribe(data => {console.log(data); });
    // console.log(this.userService.singleUser);
  // }

}
