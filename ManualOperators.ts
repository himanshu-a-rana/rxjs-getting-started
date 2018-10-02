import { map } from "rxjs/operators";
import { of } from "rxjs";

// manually applying an operator
let source$ = of(1, 2, 3, 4, 5);

let doubler = map(value => {
  value * 2;
});

let doubled$ = doubler(source$);

doubled$.subscribe(value => console.log(value)); //2 4 6 8 10
