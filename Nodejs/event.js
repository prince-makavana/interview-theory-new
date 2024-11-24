const events = require('events')
const eventEmitter = new events.EventEmitter()

let count = 0;
eventEmitter.on('scream', () => {
    console.log('====called======');
})

eventEmitter.on('one', () => {
    setTimeout(() => {
        console.log('====one======');
    }, 0);
})

eventEmitter.on('two', () => {
    setTimeout(() => {
        console.log('====two======');
    }, 0);
})

eventEmitter.emit('one')
eventEmitter.emit('two')
eventEmitter.emit('scream')
