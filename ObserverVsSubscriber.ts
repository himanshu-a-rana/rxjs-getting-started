import { Observable } from "rxjs";

// Observer Vs. Subscriber
let myNumber = [1, 3, 5];
let numberObservable$ = new Observable(subscriber => {
  if (myNumber.length === 0) {
    subscriber.error(`No values`);
  }

  for (let num of myNumber) {
    subscriber.next(num);
  }

  subscriber.complete();
});

let myObserver = {
  next: value => console.log(`Value produced: ${value}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done!`)
};

numberObservable$.subscribe(myObserver);