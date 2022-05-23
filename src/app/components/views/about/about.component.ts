import { Component, OnInit } from '@angular/core';
import {User} from "@app/models";
import {AuthenticationService, UserService} from "@app/service";
import {first} from "rxjs/operators";
import {AboutService} from "@app/service/about.service";
import {Router} from "@angular/router";
import {About} from "@app/models/about";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // this is for showing and hiding
  user!: User;
  users!: User[];

  article!: About[];
  about:About = new About();

  constructor(
                private userService: UserService,
              private authenticationService: AuthenticationService,
              private aboutService: AboutService,
              private router: Router) {

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
    this.getAboutText()
  }


  saveAboutText(){
    this.aboutService.createAbout(this.about).subscribe(
      data => {
        console.log(data);
        this.goToAboutTextList();

      },
      error => console.log(error));
  }
  goToAboutTextList(){
    this.router.navigate(['/about_text']).then();
  }

  onSubmit(){
    console.log(this.about);
    this.saveAboutText();
  }

  logout() {
    this.authenticationService.logout();
  }

// show about text
   private getAboutText(){
    this.aboutService.getAboutText().subscribe(data=>{
      this.article= data;
    })
   }


}
