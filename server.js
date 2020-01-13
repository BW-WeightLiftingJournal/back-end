const express = require("express");
const cors = require("cors");
const server = express();

const apiRouter = require("./Routes/api/api-router");
const middleware = require("./Routes/api/middleware");

middleware(server);

server.use(cors());
server.use("/api", apiRouter);
server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

module.exports = server;
