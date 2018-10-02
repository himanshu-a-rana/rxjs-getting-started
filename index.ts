import { Observable, of, from, fromEvent } from "rxjs";
import { allBooks, allReaders } from "./data";

// An observable is not executed until an object subscribes to it.
// let allBooksObservable$ = Observable.create(subscriber => {

//   if (document.title !== 'RxBookTracker') {
//     subscriber.error(`Incorrect page title.`);
//   }

//   for(let book of allBooks) {
//     subscriber.next(book);
//   }

//   setTimeout(() => {
//     subscriber.complete();
//   }, 2000);

//   return () => console.log(`Executing teardown code.`);
// });

// allBooksObservable$.subscribe(book => console.log(book.title));

let source1$ = of('hello', 10, true, allReaders[0].name);
source1$.subscribe(value => console.log(value));