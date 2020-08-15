class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
    this.observers.push(fn);
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter((subscriber) => subscriber !== fn);
        }
     broadcast(data) {
            this.observers.forEach((subscriber) => subscriber(data));
            }
    }

    const observer = new EventObserver();
    // let fn = () => {};
    // observer.subscribe(fn);
    // console.log(observer)
    // observer.unsubscribe(fn);
    let subscriberHasBeenCalled = false;
    const fn = (data) => subscriberHasBeenCalled = data;
    observer.subscribe(fn);
    observer.broadcast(true);
    console.log(subscriberHasBeenCalled)
    console.log(observer)
