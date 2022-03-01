import { Component, OnInit  } from '@angular/core';
import {AuthenticationService, UserService,} from "@app/service";
import {Router} from "@angular/router";
import {User} from "@app/models";
import {first} from "rxjs/operators";


@Component({
  selector: 'the-navigation',
  templateUrl: './the-navigation.component.html',
  styleUrls: ['./the-navigation.component.css']
})
export class TheNavigationComponent implements OnInit {
  user!: User;
  users!: User[];




  constructor(private router: Router,private userService: UserService,
              private authenticationService: AuthenticationService,


              ) {

      this.authenticationService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        // this.show = true;
        this.users = users;
      });



  }

  logout() {
    this.authenticationService.logout();
  }


}
