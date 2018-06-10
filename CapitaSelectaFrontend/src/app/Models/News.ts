import {Subject} from './Subject';
import {User} from './User';

export class News {

  id: number;
  titel: string;
  content: string;
  ageLimit: number;
  subject: Subject;
  followers: User[];

  constructor(){

  }
}
