import { of } from "rxjs";
// subscribing with an Observer


let myObserver = {
  next: value => console.log(`Value produced: ${value}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done producing values.`)
};

let sourceObservable$ = of(1, 2, 3);
sourceObservable$.subscribe(myObserver);