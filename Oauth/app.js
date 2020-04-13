var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var superagent = require('superagent');
var request = require('request');
var port = 7800;

app.use(express.static(__dirname+'/public'));
app.set('views','./src');
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
});

app.get('/profile',(req,res) => {
    const {query} = req;
    const {code} = query
    if(!code){
        res.send({
            success:false,
            message:'Error on Code'
        })
    }
    superagent
        .post("https://github.com/login/oauth/access_token")
        .send({
            client_id:"",
            client_secret:"",
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var acctoken = result.body.access_token
            const option = {
                url:`https://api.github.com/user`,
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':'token '+acctoken,
                    'User-Agent':'my-node-client'
                }
            }
            var output;
            request(option,(err,response,body)=>{
                //localStorage.setItem('Token',"sdfdgere")
                output=body
                return res.send(output)
            })
        })
})


app.get('/mydetails',(req,res) => {
    /*if(localStorage.get('Token')!=null){
        res.render('user')
    };*/
    res.render('user')
    
})


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})