const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./User');


router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


router.post('/register',(req,res)=>{
    const hashPassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,
        role:req.body.role?req.body.role:'user',
        isActive:true
    },(err,user) =>{
        if(err) return res.status(500).send({"message":"Not Registed"})
        else{
            return res.status(200).send({"message":"Registed Succesfully"})
        }
    })
})

router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user)=>{
        if(err) return res.status(401).send('Login Error')
        if(!user){
            const msg ='User Does Not Exist'
            res.send({auth:false,msg})
        }else{
            const passWordIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passWordIsValid){
                const msg = encodeURIComponent('Invalid Password')
                res.send({auth:false,msg})
            }else{
                var token = jwt.sign({id:user._id}, config.secert,{
                    expiresIn:86400//24 hours
                })
                res.send({auth:true,msg:token})
            }
        }
    })
})

router.get('/getUser',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.status(401).send({auth:false,msg:'No Token Provided'});

    jwt.verify(token,config.secert,(err,decode) => {
        if(err) res.status(401).send({auth:false,msg:'Invalid Token Provided'});
        User.findById(decode.id,{password:0},(err,user)=>{
            if(err) res.status(500).send('Problem finding user');
            if(!user) res.status(500).send({auth:false,msg:'No User found'});
            res.send(user)
        })
    })
})

router.get('/users',(req,res) => {
    User.find({},(err,user)=>{
        if(err) throw err;
        res.send(user)
    })
})

module.exports = router;