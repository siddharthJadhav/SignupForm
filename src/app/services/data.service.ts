import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Observable<any>;

  constructor() { }

  getData() {
    this.data = new Observable(observe => {
      setTimeout(() => {
        observe.next(1);
      }, 1000);

      setTimeout(() => {
        observe.next(2);
      }, 2000);

      setTimeout(() => {
        observe.next(3);
      }, 3000);

      setTimeout(() => {
        observe.next(4);
      }, 4000);

    });

    return this.data;
  }

  getUser() {

    // return new Observable(observe => {
    //   observe.next({ name: 'sid', age: 25 });
    // });

    return of({ name: 'sidhu', age: 25 });

  }

}
