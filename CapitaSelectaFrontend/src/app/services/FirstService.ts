import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../Models/User';
import "rxjs/Rx";
import {Subject} from '../Models/Subject';

@Injectable()
export class FirstService {

  apiUrl = 'http://localhost:8090';
  name: string;
  constructor(private http: HttpClient) {
    // set token if saved in local storage
    // console.log('CURRENT USERT::::: ' + localStorage.getItem('currentUser'));
    // const currentUser = localStorage.getItem('currentUser');

    // this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');
  }

  getAllSubjects(): Observable<Subject[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get(this.apiUrl + '/subjects'));
    return this.http
      .get(this.apiUrl + '/subjects', options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getAllSubjectsByName(): Observable<Subject[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8090/users/getAllByName?naam=' + this.name));
    return this.http
      .get('http://localhost:8090/users/getAllByName?naam=' + this.name, options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  subscribeToSubject(subject: any): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams()
      .set('name', this.name)
      .set('subject', subject);
    const options = {
      headers,
      params
    };
    return this.http.post<User>(this.apiUrl + '/users/addSubjectToUser', null, options);
  }

  unsubscribeToSubject(subject: any): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams()
      .set('name', this.name)
      .set('subject', subject);
    const options = {
      headers,
      params
    };
    return this.http.post<User>(this.apiUrl + '/users/removeSubjectFromUser', null, options);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
