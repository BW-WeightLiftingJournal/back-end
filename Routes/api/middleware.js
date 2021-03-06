const express = require('express');
const session = require('express-session');

const sessionConfig = {
    name: 'monkey',
    secret: 'Keep it secret, keep it safe!',
    cookie: {
        maxAge: 2 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
};

module.exports = server => {
    server.use(express.json());
    server.use(session(sessionConfig));
};