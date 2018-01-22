import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
@Injectable()
export class RxjsSampleService {

  constructor() { }

  get(){
    return Observable.of([1,2,3]);
  }

  get2(){
    return Observable.of([4,5,6]);
  }

}
