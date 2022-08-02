const { ok } = require("assert");
const e = require("express");
const express = require("express");
const http = require("http");
const bcrypt = require("bcrypt");
require("./db/conn");

const app = express();
const Regis = require("./models/scm");

app.use(express.json());

app.post("/register", async (req, res) => {
  console.log("hello ");
  try {
    const password = req.body.Password;
    const confirm_Password = req.body.Confirm_Password;
    

    if (password === confirm_Password) {
      const hasedpassword = await bcrypt.hash(password, 10);
      const adddata = new Regis({
        username: req.body.username,
        firstName: req.body.firstName,
        LastName: req.body.LastName,
        email: req.body.email,
        Password: hasedpassword,
      });

      console.log(hasedpassword);
      const save = await adddata.save();
      console.log(save);
      res.status(200).send("ok");
    } else {
      console.log("password and confirm password not match");
      res
        .status(400)
        .json({ error: "password and correcct passsword is not match.." });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

const server = http.createServer(app);

server.listen(3000);
