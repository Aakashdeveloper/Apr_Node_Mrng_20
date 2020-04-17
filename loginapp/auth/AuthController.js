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

router.get('/users',(req,res) => {
    User.find({},(err,user)=>{
        if(err) throw err;
        res.send(user)
    })
})

module.exports = router;