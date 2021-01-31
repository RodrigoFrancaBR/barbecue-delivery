import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-headerr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  user: User;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

}
