const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017"
var dbName = "AprNodeMrng"

const Maincall = {} 

var output ;
Maincall.getData = (colName) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var  dbo = db.db(dbName);
        dbo.collection(colName).find({}).toArray((err,result)=>{
            if(err) throw err;
            console.log('Data Fetched')
            output = result
        });
    });
    return output
}

Maincall.postData = (colName,dbObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var  dbo = db.db(dbName);
        dbo.collection(colName).insert(dbObj,(err,result)=>{
            if(err) throw err;
            console.log('Data Fetched')
            db.close()
        })
    })
    let out = `Data inserted in ${colName}`
    return out
}

/*const Maincall = (col) => {
    return "hh"
}

//Get Call
var output ;
Maincall.prototype.getData = (colName) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var  dbo = db.db(dbName);
        dbo.collection(colName).find({}).toArray((err,result)=>{
            if(err) throw err;
            console.log('Data Fetched')
            output = result
        });
    });
    return output
}

//PostCall
Maincall.prototype.postData = (colName,dbObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var  dbo = db.db(dbName);
        dbo.collection(colName).insert(dbObj,(err,result)=>{
            if(err) throw err;
            console.log('Data Fetched')
            db.close()
        })
    })
    let out = `Data inserted in ${colName}`
    return out
}

*/

export default Maincall;