import { Component, OnInit } from '@angular/core';
import {FirstService} from '../services/FirstService';
import {AuthenticationService} from '../services/AuthenticationService';
import {Subject} from '../Models/Subject';
import {SecondService} from '../services/SecondService';
import {Observable} from 'rxjs/Observable';
import {News} from '../Models/News';

@Component({
  selector: 'app-service-twee',
  templateUrl: './service-twee.component.html',
  styleUrls: ['./service-twee.component.css'],
  providers: [SecondService, AuthenticationService]
})
export class ServiceTweeComponent implements OnInit {
  subjectsArray: Subject[] = [];
  newsTitleArray: News[] = [];
  newsArray: News;
  ownSubjectsArray: Subject[] = [];
  errorMessage: string;
  naampje = localStorage.getItem('name');
  naam: string;

  constructor(private secondService: SecondService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getPosts();
    this.secondService.refreshTwo();
  }

  logout() {
    this.authenticationService.logout();
  }

  getPosts(): void {
    this.secondService.getAllSubjectsByName()
      .subscribe(
        (subjects) => {
          this.subjectsArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.subjectsArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  getNewsBySubjectName(naam: string): void {
    this.secondService.getAllNewsTitlesBySubject(naam)
      .subscribe(
        (subjects) => {
          this.newsTitleArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.subjectsArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  getContentBySubjectName(naam: number): void {
    this.secondService.getContentBYTitle(naam)
      .subscribe(
        (subjects) => {
          this.newsArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.newsArray);
        },
        error => console.log("Error :: " + error)
      );
  }
}
