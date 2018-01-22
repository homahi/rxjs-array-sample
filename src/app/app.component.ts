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

  ngOnInit() {
    let a = this.service.get();
    let b = this.service.get2();
    let c = this.service.get();

    Observable.forkJoin([a, b, c]).subscribe((data) => {
      this.data = Array.prototype.concat.apply([],data);
    });
  }
}
