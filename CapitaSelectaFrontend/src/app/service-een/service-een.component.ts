import { Component, OnInit } from '@angular/core';
import {FirstService} from '../services/FirstService';
import {Subject} from '../Models/Subject';
import {AuthenticationService} from '../services/AuthenticationService';

@Component({
  selector: 'app-service-een',
  templateUrl: './service-een.component.html',
  styleUrls: ['./service-een.component.css'],
  providers: [FirstService, AuthenticationService]
})
export class ServiceEenComponent implements OnInit {
  subjectsArray: Subject[] = [];
  ownSubjectsArray: Subject[] = [];
  errorMessage: string;
  naampje = localStorage.getItem('name');

  constructor(private firstService: FirstService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log('OPGESLAGEN NAAM:::: ' + localStorage.getItem('name'));
    this.getPosts();
    this.getOwnSubjects();
  }

  logout() {
    this.authenticationService.logout();
  }

  getPosts(): void {
    this.firstService.getAllSubjects()
      .subscribe(
        (subjects) => {
          this.subjectsArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.subjectsArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  getOwnSubjects(): void {
    this.firstService.getAllSubjectsByName()
      .subscribe(
        (subjects) => {
          this.ownSubjectsArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.ownSubjectsArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  addSubject(string: string): void {
    string = string.replace('#', '%23');
    this.firstService.subscribeToSubject(string)
      .subscribe( tweett => {
        },
        error => this.errorMessage = <any>error);
    this.getOwnSubjects();
    // this.getPostss();
  }
}
