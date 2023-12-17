const express = require('express');
const app = express();
// const path = require('path');
const PORT = 3001;

// require('dotenv').config();
// const PORT = process.env.SERVER_PORT; // this port for security purpose

app.use(express.json);  // for parse the whole data.
const productRoutes = require('./router/api-product/user'); 
app.use('/api',productRoutes);

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname)+ '/index.html');
//     // OR
//     // res.sendFile(path.resolve(__dirname , "/index.html"));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.resolve(__dirname)+ '/about.html');
// });

app.listen(PORT,()=>{
    console.log("port started");
});

