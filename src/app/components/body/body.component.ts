import {Component} from '@angular/core';
import {ProductService} from "../../Services/product.service";
import {Proudct} from "../../models/prouduct";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  proudcts:Proudct[]=[];

  productService;

  constructor() {
    this.productService=new ProductService();
  }
  getProudct(){
    this.proudcts=this.productService.getAllProudct();
  }


}
