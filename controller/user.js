const express = require('express');

const user = (req,res)=>{
    res.send("This is get" + req.body.name);
}
const allusers = (req,res)=>{
    res.send("this is  post " + req.body.name);
}
const login = ()=>{
  const {email,password} = req.body;
    const db = {
        email: "misbah@gmai.com",
        password: "1234",
    }
    if(email == db.email && password == db.password){
        res.send("Successfull login");

    }
    else{
        res.status(404).send("Invalid Credentials");

    }
}
// module.exports = user;
module.exports = {user,allusers,login};