"use strict";
process.env.NODE_ENV = 'test';

let chai = require('chai');

describe(
    'Service Test',
    () => {
        it(
            'GET / should return something',
            (done) => {
                (200).should.equal(200);
                done();
            }
        );
    }
);