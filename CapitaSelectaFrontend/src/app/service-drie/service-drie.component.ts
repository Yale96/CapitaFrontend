import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/AuthenticationService';
import {SecondService} from '../services/SecondService';
import {ThirdService} from '../services/ThirdService';
import {Subject} from '../Models/Subject';
import {AanbevelingDTO} from '../Models/AanbevelingDTO';
import {User} from '../Models/User';
import {Aanbeveling} from '../Models/Aanbeveling';

@Component({
  selector: 'app-service-drie',
  templateUrl: './service-drie.component.html',
  styleUrls: ['./service-drie.component.css'],
  providers: [ThirdService, AuthenticationService]
})
export class ServiceDrieComponent implements OnInit {

  aanbevelingArray: AanbevelingDTO[] = [];
  userArray: User[] = [];
  subjectArray: Subject[] = [];
  errorMessage: string;
  usert: User;
  naampje = localStorage.getItem('name');
  selectedUser: string;
  selectedSub: string;

  constructor(private thirdService: ThirdService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getAanbevelingenByNaam();
    this.getUsers();
    this.getSubjects();
  }

  getAanbevelingenByNaam(): void {
    this.thirdService.getAanbevelingenByNaam()
      .subscribe(
        (subjects) => {
          this.aanbevelingArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.aanbevelingArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  getUsers(): void {
    this.thirdService.getUsers()
      .subscribe(
        (subjects) => {
          this.userArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.userArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  getSubjects(): void {
    this.thirdService.getSubjects()
      .subscribe(
        (subjects) => {
          this.subjectArray = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.subjectArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  refreshSubs(): void {
    this.thirdService.refreshSubs()
      .subscribe(
        (subjects) => {
          this.usert = subjects;
          console.log("POST ARRAY:::::::::::::::: " + this.subjectArray);
        },
        error => console.log("Error :: " + error)
      );
  }

  addSubject(string: string): void {
    string = string.replace('#', '%23');
    this.thirdService.subscribeToSubject(string)
      .subscribe( tweett => {
        },
        error => this.errorMessage = <any>error);
    this.refreshSubs();
  }

  createAanbeveling(to: string, subject: string, waarom: string): void {
    this.thirdService.addAanbeveling(to, subject, waarom)
      .subscribe( tweett => {
        },
        error => this.errorMessage = <any>error);

    // this.getPostss();
  }

}
