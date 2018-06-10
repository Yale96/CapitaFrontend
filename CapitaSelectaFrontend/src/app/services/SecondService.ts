import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import "rxjs/Rx";
import {Observable} from 'rxjs/Observable';
import {Subject} from '../Models/Subject';
import {News} from '../Models/News';

@Injectable()
export class SecondService {

  apiUrl = 'http://localhost:8092';
  name: string;
  naam: string;
  url: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    // console.log('CURRENT USERT::::: ' + localStorage.getItem('currentUser'));
    // const currentUser = localStorage.getItem('currentUser');
    // http://localhost:8092/users/refresh
    // this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');

  }

  getAllSubjects(): Observable<Subject[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8092/subjects/getAll'));
    return this.http
      .get('http://localhost:8092/subjects/getAll', options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  refreshTwo(): void {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8092/users/refresh'));
    this.http
      .get('http://localhost:8092/users/refresh', options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getAllSubjectsByName(): Observable<Subject[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8092/users/getAllByName?naam=' + this.name));
    return this.http
      .get('http://localhost:8092/subjects/getAllByName?naam=' + this.name, options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getAllNewsTitlesBySubject(naam: string): Observable<News[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8092/news/findNewsBySubject?naam=' + naam));
    return this.http
      .get('http://localhost:8092/news/findNewsBySubject?naam=' + naam, options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getContentBYTitle(naam: number): Observable<News> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    this.url = decodeURIComponent('http://localhost:8092/news/findNewsBySubject?naam=' + naam)
    console.log(this.http.get(this.url));
    return this.http
      .get('http://localhost:8092/news/findNewsByTitle?id=' + naam, options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
