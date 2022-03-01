import { Component, OnInit } from '@angular/core';
import {User} from "@app/models";
import {AuthenticationService, UserService} from "@app/service";
import {first} from "rxjs/operators";

interface Text{
  writing: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: User;
  users!: User[];

  // This is for add text
  newWriting: string= ''
  article: Text[]= []

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,) {

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

    fetch('https://api.json.com/bins/zg7ze')
      .then(res => res.json())
      .then(json => (this.article = json))

  }
  addText(){
    this.article.push({
      writing: this.newWriting
    })
  }

  logout() {
    this.authenticationService.logout();
  }


}
