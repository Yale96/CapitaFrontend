import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import "rxjs/Rx";
import {Observable} from 'rxjs/Observable';
import {Subject} from '../Models/Subject';
import {Aanbeveling} from '../Models/Aanbeveling';
import {AanbevelingDTO} from '../Models/AanbevelingDTO';
import {User} from '../Models/User';

@Injectable()
export class ThirdService {

  apiUrl = 'http://localhost:8094';
  name: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    // console.log('CURRENT USERT::::: ' + localStorage.getItem('currentUser'));
    // const currentUser = localStorage.getItem('currentUser');

    // this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');
  }

  getAanbevelingenByNaam(): Observable<AanbevelingDTO[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8094/aanbevelingen/getByName?naam=' + this.name));
    return this.http
      .get('http://localhost:8094/aanbevelingen/getByName?naam=' + this.name , options)
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getUsers(): Observable<User[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8094/users'));
    return this.http
      .get('http://localhost:8094/users')
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  getSubjects(): Observable<Subject[]> {
    const options = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    console.log(this.http.get('http://localhost:8094/subjects'));
    return this.http
      .get('http://localhost:8094/subjects')
      .map(response => {
        const subjects = response;
        return subjects;
      })
      .catch(this.handleError);
  }

  addAanbeveling(to: string, subject: string, waarom: string): Observable<Aanbeveling> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams()
      .set('toName', to)
      .set('fromName', this.name)
      .set('subjectName', subject)
      .set('waarom', waarom);
    const options = {
      headers,
      params
    };
    return this.http.post<Aanbeveling>('http://localhost:8094/aanbevelingen/create', null, options);
  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
