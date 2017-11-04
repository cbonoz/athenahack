'use strict';
const library = (function () {
    const athenahealthapi = require('./athenahealthapi');

    const key = process.env.ATHENA_KEY; // 'CHANGEME: YOUR_API_KEY'
    const secret = process.env.ATHENA_SECRET; // 'CHANGEME: YOUR_API_SECRET'
    const version = 'preview1'
    const patientid = 3373;
    const practiceid = 1128700; // sandbox sample id: 195900
    const departmentid = 1;

    const random = (arr) => {
        return arr[Math.round(Math.random() * (arr.length - 1))];
    };

    return {
        random: random,
        api: new athenahealthapi.Connection(version, key, secret, practiceid)
    }

})();
module.exports = library;

