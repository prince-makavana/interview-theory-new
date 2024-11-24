function invite(fname, lname) {
    console.log(fname + ' == ' + this.phone + ' == ' + this.email + ' == ' + lname);
}

const details = { phone: 8469855099, email: 'princemakavana17@gmail.com' }

// Call
invite.call(details, 'Prince', 'Makavana')// need to pass value as parameter

// Apply
invite.apply(details, ['Prince', 'Makavana']) // Need to pass Array as a parameter

// Bind
const res = invite.bind(details) // Need to pass object for this keyword and then return a function that allows you to pass any number arguments
res('Prince', 'Makavana')
