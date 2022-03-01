import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserService} from "@app/service";
import {User} from "@app/models";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
