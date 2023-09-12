import { Injectable } from '@angular/core';
import {Person} from "../models/Peron";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons :Person[]=[
    new Person(1,'Muhammed',120000),
    new Person(2,'Mahmoud',5000),
    new Person(3,'Hassan',5000),
    new Person(4,'ali',3000),
    new Person(5,'Zezo',2000),
  ]


  getAllPersons():Person[]{
    return this.persons;
  }

}
