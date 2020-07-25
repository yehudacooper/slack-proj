import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usersList: User[];
  // singleUser: User;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getConfig().subscribe(data => this.usersList = data);
    console.log(this.usersList);

  }
  chosenUser(user: User){
    this.userService.chosenUser = user;
    console.log(user);
    this.userService.singleUser.next(this.userService.chosenUser);
  }

}
