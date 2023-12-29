const express = require('express');
const { connect } = require('mongoose');  // Destructure mongoose.connect
const { User } = require('../schema/user');
const { hash } = require('bcryptjs');
require('dotenv').config();


const user = (req, res) => {
    res.send("This is get" + req.body.name);
}
const allusers = (req, res) => {
    res.send("this is  post " + req.body.name);
}

const login = async (res, req) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            await connect(process.env.MONGO_URI)
            const checkuser = await userSchema.findOne({ email })
            if (checkuser) {
                const decryptPass = await compare(password, checkuser.password)
                if (decryptPass) {
                    res.json({
                        message: "seccess login",
                        user: checkuser
                    })
                } else {
                    res.status(400).json({ message: "Incorrect password" });
                }

            } else {
                res.status(404).json({ message: "User not fount" });
            }

        }
        catch (error) {
            res.status(404).json({ message: email.message });
        }

    } else {
        res.status(404).json("Required field missing");
    }
    // const db = {
    //     email: "misbah@gmai.com",
    //     password: "1234",
    // }
    // if (email == db.email && password == db.password) {
    //     res.send("Successfull login");

    // }
    // else {
    //     res.status(404).send("Invalid Credentials");

    // }
}

const signup = async (req, res) => {
    //   const db = await connect(process.env.MONGO_URI);
    const { userName, email, password } = req.body

    if (userName && email && password) {
        try {
            // const {userName, email,password} = req.body
            //    const db = await connect(process.env.MONGO_URI)
            await connect(process.env.MONGO_URI)
            const checkuser = await userSchema.exists({ email })
            if (!checkuser) {
                await userSchema.create({ userName, email, password: await hash(password, 16) }) // Password Encryption
                res.status(201).send("user created seccessfull");

            }
            // const creat_user = await userSchema.create({userName, email,password})
            // res.status(201).send("user created seccessfull");
            else {
                res.json({
                    message: "user already exist"
                });
            }

        }
        catch (error) {
            res.status(404).send(error.message);
        }
    }


    res.send("yes");
}

// module.exports = user;
module.exports = { user, allusers, login, signup };