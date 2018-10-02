import { Observable } from "rxjs";
import { allBooks, allReaders } from "./data";

// An observable is not executed until an object subscribes to it.
function subscribe(subscriber) {
  for (let book of allBooks) {
    subscriber.next(book);
  }
}

let allBooksObservable$ = new Observable(subscribe);

allBooksObservable$.subscribe(book => console.log(book.title));
