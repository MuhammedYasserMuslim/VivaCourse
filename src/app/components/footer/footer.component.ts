import { Component } from '@angular/core';
import {Person} from "../../models/Peron";
import {PersonService} from "../../Services/person.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  persons:Person[]=[];

  personServices:PersonService;


  constructor() {

    this.personServices = new PersonService();
  }

  getPersons(){
    this.persons=this.personServices.getAllPersons();
  }

}
