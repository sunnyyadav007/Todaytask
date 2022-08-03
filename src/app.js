
;
const express = require("express");
const http = require("http");

require("./db/conn");
require('dotenv').config()
const getRegister = require("./router/register")
const getLogin = require("./router/Login")

const app = express();


app.use(express.json());

app.use(getRegister)
app.use(getLogin)



const server = http.createServer(app);

server.listen(3000);
