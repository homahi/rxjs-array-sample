import { Component, OnInit } from '@angular/core';
import { RxjsSampleService } from './rxjs-sample.service'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: RxjsSampleService) { }
  title = 'app';
  data: any;
  data2: any;

  ngOnInit() {
    let a = this.service.get().map(item => {return item.hoge});
    let b = this.service.get2().map(item => {return item.hoge});
    let array = [a,b]

    Observable.forkJoin([a, b]).map(item =>{return Array.prototype.concat.apply([],item)}).subscribe((data) => {
      this.data = data.map(item => {return item.fuga});
    });

  }
}
