
;
const express = require("express");
const http = require("http");

require("./db/conn");
require('dotenv').config()
const getRegister = require("./router/register")
const getLogin = require("./router/Login")
const getDatas = require("./router/Dataget")

const app = express();


app.use(express.json());



app.use(getRegister)
app.use(getLogin)
app.use(getDatas)



const server = http.createServer(app);

server.listen(3000);
