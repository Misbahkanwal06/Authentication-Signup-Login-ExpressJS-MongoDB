const express = require('express');
const router = express.Router(); 
// const user = require('/SMIT/Express1UU/controller/user');
const {user,allusers,login} = require('/SMIT/Express1UU/controller/user');

router.get('/',user);
router.post('/alluser',allusers);
router.post('login',);

module.exports = router;