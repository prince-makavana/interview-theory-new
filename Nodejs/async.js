const { waterfall } = require("async");

waterfall([
    function (cb) {
        console.log('Print=====', cb);
        console.log('Print1');
        cb(null, true)
    },
    function (data, cb) {
        console.log('Print2=====', cb);
        setTimeout(() => {
            console.log('Print2');
        }, 1000);
        console.log('Print3');
        cb(null, true)
    },
], (err, result) => {
    console.log('Print4');
})


