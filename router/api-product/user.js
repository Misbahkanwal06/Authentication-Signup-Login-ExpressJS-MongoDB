const express = require('express');
const router = express.Router(); 
// const user = require('/SMIT/Express1UU/controller/user');
// const {user,allusers,login,signup} = require('/SMIT/Express-JS-2U Router-Controller/controller/user');
const {user,allusers,login,signup} = require('/SMIT/Express-JS-2U Router-Controller-Mongodb-Mongoose-Schema-Model-Signup/controller/user');


router.get('/',user);
router.post('/alluser',allusers);
router.post('/login',login);
router.post('/signup',signup);

module.exports = router;