
import {Proudct} from "../models/prouduct";


export class ProductService {

  public getAllProudct():Proudct[]{
    let proudcts :Proudct[];

    proudcts=[
     new Proudct( 1,'Apple',1000),
     new Proudct( 2,'Samsung',900),
     new Proudct( 3,'Xiaomi',600),
     new Proudct( 4,'Huawel',800),
     new Proudct( 5,'Oppo',700)
    ];
    return proudcts;

  }




}
