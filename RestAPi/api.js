const express = require('express');
const app = express();
const port = 9000
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name = "aprmrng1";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    db.collection(col_name).find({isActive:true}).toArray((err,result) => {
        if(err) throw err
        else{
            res.render('index',{data:result})
        }
    })
  
});

app.get('/users/:id',(req,res) => {
    var {id}= req.params;
    var query={id:parseInt(id),isActive:true}
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })
})

app.get('/new', (req,res) => {
    var id = Math.floor(Math.random()*10000)
    res.render('admin',{id:id})
})

app.get('/user',(req,res) =>{
    var query = {};
    if(req.query.id){
        query={id:parseInt(req.query.id),isActive:true}
    }else if(req.query.isActive) {
        var output = req.query.isActive;
        var condition;
        if(output==='false'){
            condition=false
        }else if(output==='true'){
            condition=true
        }else{
            condition=true
        }
        query={isActive:condition}
    }
    else{
        query={isActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err){
            throw err
        }else{
            res.send(result);
        }
    })
})

//Insert
app.post('/addUser',(req,res) => {
    var data={
        "id":parseInt(req.body.id),
        "name": req.body.name,
        "city": req.body.city,
        "phone": req.body.phone,
        "isActive":true
    }
    db.collection(col_name).insert(data,(err,result) => {
        if(err){
            throw err;
        }else{
            res.redirect('/');
        }
    })
})

//update
app.put('/updateUser',(req,res) => {
    db.collection(col_name)
        .findOneAndUpdate({id:parseInt(req.body.id)},{
            $set:{
                "id":parseInt(req.body.id),
                "name": req.body.name,
                "city": req.body.city,
                "phone": req.body.phone,
                "isActive":true
            }
        },(err,result) => {
            if(err){
                throw err;
            }else{
                res.send('Data Update');
            }
        })
})

//Delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).findOneAndDelete({"id":parseInt(req.body.id)},
        (err,result) => {
        if(err){
            throw err;
        }else{
            res.send('Data Deleted');
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