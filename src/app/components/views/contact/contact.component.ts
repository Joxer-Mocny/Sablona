import { Component, OnInit } from '@angular/core';
import {User} from "@app/models";
import {AuthenticationService, UserService} from "@app/service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user!: User;
  users!: User[];

  constructor(private userService: UserService, private authenticationService: AuthenticationService,) {

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
