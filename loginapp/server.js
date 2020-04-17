var express = require('express')
var port = 5000;
const app = express();
const db = require('./db');

const AuthController = require('./auth/AuthController');
app.use('/api/auth',AuthController);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
 