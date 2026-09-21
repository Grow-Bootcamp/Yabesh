import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on("userRegistered", (username) => {
    console.log(`Welcome ${username}`);
});

emitter.on("userRegistered", (username) => {
    console.log(`Send email to ${username}`);
});

emitter.on("userRegistered", (username) => {
    console.log(`Create account for ${username}`);
});

emitter.emit("userRegistered", "Yabesh");