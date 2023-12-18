const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const eventEmitter = new Emitter();

eventEmitter.on("foo", () => {
    console.log("first foo");
});

eventEmitter.on("foo", () => {
    console.log("second foo");
});

eventEmitter.on("foo", (x) => {
    console.log("third foo with param:", x);
});

eventEmitter.on("bar", () => {
    console.log("first bar");
});

eventEmitter.once("bark", () => {
    console.log("first bark");
});

eventEmitter.emit("foo");
eventEmitter.emit("foo", 111);
eventEmitter.emit("bar");
eventEmitter.emit("bark");
eventEmitter.emit("bark ");
