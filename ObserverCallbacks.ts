import { of } from "rxjs";

// subscribing with callbacks

let sourceObservable$ = of(1, 2, 3);

sourceObservable$.subscribe(
  value => console.log(`Value produced: ${value}`),
  err => console.log(`ERROR: ${err}`),
  () => console.log(`All done producing values.`)
);

sourceObservable$.subscribe(
  value => console.log(`Value produced: ${value}`),
  err => console.log(`ERROR: ${err}`),
);

sourceObservable$.subscribe(
  value => console.log(`Value produced: ${value}`),
);