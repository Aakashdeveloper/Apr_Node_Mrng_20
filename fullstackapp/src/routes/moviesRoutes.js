var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


function router(menu){
    moviesRouter.route('/')
    .get((req,res) => {
        mongodb.connect(url,function(err,dc){
            if(err){
                res.status(501).send('Error While Connecting')
            }else{
               const dbo =  dc.db('classdatabase');
               dbo.collection('movies').find({}).toArray((err,data)=>{
                if(err){
                    res.status(501).send('Error While fetching')
                }else{
                    res.render('movies',{title:'Movies Page',movies:data,menu:menu});
                }
            })
            }
        })
    
    });

    moviesRouter.route('/details/:id')
    .get((req,res) => {
        //var id = req.params.id
        var {id} = req.params;
        mongodb.connect(url,function(err,dc){
            if(err){
                res.status(501).send('Error While Connecting')
            }else{
               const dbo =  dc.db('classdatabase');
               dbo.collection('movies').findOne({_id:id},(err,data)=>{
                if(err){
                    res.status(501).send('Error While fetching')
                }else{
                    res.render('moviesDetails',{title:'Movies Details Page',menu:menu,details:data});
                }
            })
            }
        })
   
    });

    return moviesRouter
}


module.exports = router;