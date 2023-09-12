import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  myDate = new Date();


  someText:string="you can change me";

  num1:number=4;
  num2:number=5;


  sum():number{
    return this.num1+this.num2;
  }
  myInfo = false;

  names:string[] =['muhammed','Mahmoud','Ali','Salah'];

  changInfo() {
    this.myInfo = !this.myInfo;

  }

  myName(name: string) {
    console.log(`My name is${name}`)
  }


  name:string = 'Mahmoud nader';
}
