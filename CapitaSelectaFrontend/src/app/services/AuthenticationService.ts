import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../Models/User';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  apiUrl = 'http://192.168.25.77:8080/UserSystem/webresources/personal';
  loginUrl = 'http://localhost:8090/users/login';

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    // console.log('CURRENT USERT::::: ' + localStorage.getItem('currentUser'));
    // const currentUser = localStorage.getItem('currentUser');

    // this.token = localStorage.getItem('token');
  }

  login(name: string, password: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams()
      .set('name', name)
      .set('password', password);
    const options = {
      headers,
      params
    };
    return this.http.post<User>(this.loginUrl, null, options);
  }

  findMail(mail: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams()
      .set('mail', mail)
    const options = {
      headers,
      params
    };
    return this.http.get<User>(this.apiUrl + '/bymail?mail=' + mail + '', options);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('userName');
  }

}
