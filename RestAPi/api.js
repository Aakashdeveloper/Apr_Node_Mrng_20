const express = require('express');
const app = express();
const port = 9000
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name = "aprmrng";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.status(200).send('Health Check')
});

app.get('/users',(req,res) => {
    db.collection(col_name).find({}).toArray((err,result) => {
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })
})

app.post('/addUser',(req,res) => {
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err){
            throw err;
        }else{
            res.send('Data Added');
        }
    })
})



MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log('error while connecting');
    db = client.db('classpractice');

    app.listen(port,(err) => {
        console.log(`App is running on port ${port}`)
    })

})