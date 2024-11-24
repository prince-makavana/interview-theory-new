const bufferName = new Buffer('Prince Makavana')
const bufferEmail = new Buffer(50)
const write = bufferEmail.write('hello prince')

// bufferName.copy(bufferEmail)
console.log(write);

const obj = require('./event')
// obj.a
console.log(obj.a);