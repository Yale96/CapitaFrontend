import { Component, OnInit } from '@angular/core';
import {User} from '../Models/User';
import {AuthenticationService} from '../services/AuthenticationService';

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
  }

  login(email: string, password: string) {
    this.loading = true;
    this.authenticationService.login(email, password)
      .subscribe(result => {
        if (result != null) {
          this.user = result;
          localStorage.setItem('name', this.user.name);
            window.location.href = '/een';
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
