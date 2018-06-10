import {User} from './User';
import {Subject} from './Subject';


export class Aanbeveling {
  id: number;
  to: User;
  from: User;
  subject: Subject;
  waarom: string;
  aanbevolenAan: User[];

  constructor() {

  }
}
