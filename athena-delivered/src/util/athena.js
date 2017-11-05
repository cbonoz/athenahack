'use strict';
const library = (function () {
    const athenahealthapi = require('./athenahealthapi');
    const random_name = require('node-random-name');

    const key = process.env.ATHENA_KEY; // 'CHANGEME: YOUR_API_KEY'
    const secret = process.env.ATHENA_SECRET; // 'CHANGEME: YOUR_API_SECRET'
    const version = 'preview1'
    const patientid = 3373;
    const practiceid = 1128700; // sandbox sample id: 195900
    const departmentid = 1;

    let patients = []
    for (var i = 0; i < 20; i++ ) {
        const patient = {
            name: random_name({ seed: 'Based on this' + i }),
            height: `5' ${Math.floor(Math.random() * 12) + 1}\"`,
            gender: Math.random() > .5 ? 'F' : 'M',
            family: "None",
            id: Math.floor(Math.random() * 1000000000)
        };
        patients.push(patient);
    }

    const random = (arr) => {
        return arr[Math.round(Math.random() * (arr.length - 1))];
    };

    return {
        random: random,
        patients: patients,
        api: new athenahealthapi.Connection(version, key, secret, practiceid),
    }

})();
module.exports = library;

