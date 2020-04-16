const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 2300;

app.use(cors())
const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'docker',
    port:5432
})

app.get('/students',(req,res)=>{
    pool.query('SELECT * FROM user',(err,result)=>{
        if(err){
            throw err
        }else{
            res.status(200).send(result)
        }
    })
})

app.post('/addstudents',(req,res)=>{
    pool.query('INSERT INTO student (Class,RollNo,City) VALUES ($1,$2,$3)',['Node',1,'London'],(err,result)=>{
        if(err){
            throw err
        }else{
            res.status(200).send(result)
        }
    })
})


app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})

