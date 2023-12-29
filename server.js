const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const path = require('path');
const PORT = 3001;

require('dotenv').config();
// const PORT2 = process.env.SERVER_PORT; // this port for security purpose

// MIDDLEWARE
app.use(express.json);  // for parse the whole data.
const productRouter = require('./router/api-product/user'); 


//API ROUTES
app.use('/api',productRouter);

// async function main() {
//     await mongoose.connect(process.env.MONGO_URI);
// } 
// OR
mongoose.connect(process.env.MONGO_URI)
.then((data)=>{
console.log("connencted");
})
.catch((error)=>{
  console.log(error);
})




app.listen(PORT,()=>{
    console.log("port started");
});

