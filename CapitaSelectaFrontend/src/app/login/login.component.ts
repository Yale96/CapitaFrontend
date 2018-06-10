import { Component, OnInit } from '@angular/core';
import {User} from '../Models/User';
import {AuthenticationService} from '../services/AuthenticationService';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from '../Models/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  user: User;
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.fillTwo();
    this.fillThree();
  }

  fillTwo(): void {
    this.authenticationService.fillDataInTwo();
  }

  fillThree(): void {
    this.authenticationService.fillDataInThree();
  }

  login(email: string, password: string) {
    this.loading = true;
    this.authenticationService.login(email, password)
      .subscribe(result => {
        if (result != null) {
          this.user = result;
          this.fillTwo();
          this.fillThree();
            window.location.href = '/Onderwerpen';
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
