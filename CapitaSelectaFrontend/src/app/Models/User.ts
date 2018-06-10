import {Subject} from './Subject';

export class User {

  id: number;
  name: string;
  mail: string;
  password: string;
  age: number;
  followingSubjects: Subject[];
  aanbevelingen: any[];

  constructor(){

  }
}

