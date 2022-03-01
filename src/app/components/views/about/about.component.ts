import { Component, OnInit } from '@angular/core';
import {User} from "@app/models";
import {AuthenticationService, UserService} from "@app/service";
import {first} from "rxjs/operators";

interface Text{
  writing: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // this is for showing adn hiding
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
