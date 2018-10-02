import { Observable, of, from, fromEvent, concat, interval, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, filter, tap, catchError } from "rxjs/operators";
import { allBooks, allReaders } from "./data";

// #region Creating Observable
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

// let source1$ = of("hello", 10, true, allReaders[0].name);
// // source1$.subscribe(value => console.log(value));

// let source2$ = from(allBooks);
// // source2$.subscribe(book => console.log(book.title));

// let source3$ = concat(source1$, source2$).subscribe(value =>
//   console.log(value)
// );

// let button = document.getElementById("readersButton");
// fromEvent(button, "click").subscribe(event => {
//   console.log(event);

//   let readerDiv = document.getElementById("readers");

//   for (let reader of allReaders) {
//     readerDiv.innerHTML += reader.name + "<br/>";
//   }
// });

// let button = document.getElementById("readersButton");
// fromEvent(button, "click").subscribe(event => {
//   ajax("/api/readers").subscribe(ajaxResponse => {
//     console.log(ajaxResponse);
//     let readers = ajaxResponse.response;
//     let readerDiv = document.getElementById("readers");
//     for (let reader of readers) {
//       readerDiv.innerHTML += reader.name + "<br>";
//     }
//   });
// });
//#endregion

//#region Subscribing to Observable with Observer

// When Does Observable Execution Begin?
// The subscribe method is called
// Each call to subscribe triggers an independent execution for a particular observer

// let books$ = from(allBooks);

// let bookObserver = {
//   next: book => console.log(`Title: ${book.title}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };

// books$.subscribe(bookObserver);
// books$.subscribe(
//   book => console.log(`Author: ${book.author}`),
//   err => console.log(`ERROR: ${err}`),
//   () => console.log(`All done!`)
// );

// let currentTime$ = new Observable(subscriber => {
//   const timeString = new Date().toLocaleTimeString();
//   subscriber.next(timeString);
//   subscriber.complete();
// });

// currentTime$.subscribe(currentTime =>
//   console.log(`Observer 1: ${currentTime}`)
// );

// setTimeout(() => {
//   currentTime$.subscribe(currentTime =>
//     console.log(`Observer 2: ${currentTime}`)
//   );
// }, 1000);

// setTimeout(() => {
//   currentTime$.subscribe(currentTime =>
//     console.log(`Observer 3: ${currentTime}`)
//   );
// }, 2000);

// let timesDiv = document.getElementById("times");
// let button = document.getElementById("timerButton");

// let timer$ = interval(1000);
// let timer$ = new Observable(subscriber => {
//   let i = 0;
//   let intervalID = setInterval(() => {
//     subscriber.next(i++);
//   }, 1000);

//   return () => {
//     console.log(`Executing teardown code.`);
//     clearInterval(intervalID);
//   };
// });

// let timerSubscription = timer$.subscribe(
//   value =>
//     (timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`),
//   null,
//   () => console.log(`All done!`)
// );

// let timerConsoleSubscription = timer$.subscribe(value =>
//   console.log(`${new Date().toLocaleTimeString()} (${value})`)
// );

// timerSubscription.add(timerConsoleSubscription);
// // timerSubscription.remove(timerConsoleSubscription);

// fromEvent(button, "click").subscribe(event => timerSubscription.unsubscribe());
//#endregion

//#region Using Operators
ajax("/api/errors/500")
  .pipe(
    mergeMap(ajaxResponse => ajaxResponse.response),
    filter(book => book.publicationYear < 1950),
    tap(oldBook => console.log(`Title: ${oldBook.title}`)),
    // catchError(err => of({ title: "Corduroy", author: "Don Freeman" }))
    // catchError((err, caught) => caught)
    // catchError(err => throw `Something bad happened - ${err.message}`)
    catchError(err => return throwError(err.message))
  )
  .subscribe(
    finalValue => console.log(`VALUE: ${finalValue.title}`),
    error => console.log(`ERROR: ${error}`)
  );
//#endregion
