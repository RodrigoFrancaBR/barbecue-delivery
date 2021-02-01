import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
