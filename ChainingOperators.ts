import { of } from "rxjs";
import { map, filter } from "rxjs/operators";
// chaining operators

let source$ = of(1, 2, 3, 4, 5);

// Older syntax
// source$
//   .map(value => value * 2)
//   .filter(mappedValue => mappedValue > 5)
//   .subscribe(finalValue => console.log(finalValue));

source$
  .pipe(
    map(value => value * 2),
    filter(mappedValue => mappedValue > 5)
  )
  .subscribe(finalValue => console.log(finalValue)); // 6 8 10

// Categories of Operators
// Transformation
// Filtering
// Combination
// Utility
// Conditional
// Aggregate
// Multicasting
