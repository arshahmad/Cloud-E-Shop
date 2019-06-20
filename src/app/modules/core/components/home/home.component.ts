import {Component, OnInit} from '@angular/core';
import {ButtonService} from '@ecm-app/button.service';
import {interval, of, pipe, Subscription, timer} from 'rxjs';
import {every, map} from 'rxjs/operators';

@Component ({
  selector: 'ecm-home',
  templateUrl: './home.component.html',
  styleUrls: [
    'home.component.scss'
  ],
})
export class HomeComponent implements OnInit {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor(private _eventBus: ButtonService) {
  }

  toggleDrawer() {
    this._eventBus.broadcast('drawer');
  }
  ngOnInit(): void {
//     const myNumbers$ = timer(5000, 1000)
//       .pipe(map (
//       (data: number) => {
// return data * 2;
//       }
//     ));
//     this.numberObsSubscription = myNumbers$.subscribe(
//       (numbers: number) => {
//         console.log(numbers);
//       }
//     );
  }

//  const myObservable = Observable.create((observer: Observer <string>) => {
// setTimeout(() => {
// observer.next ('you');
// }, 2000);
// setTimeout(() => {
// observer.next ('are');
// }, 4000);
// setTimeout(() => {
// observer.complete ();
// }, 6000);
//  });
//  this.customObsSubscription = myObservable.subscribe(
//    (data: string) => {
//      console.log(data);
//    },
//  (data: string) => {
// console.log(data);
//     },
//    () => {
//      console.log('learning');
//    }
//  );
//   }
//
//
//
}

