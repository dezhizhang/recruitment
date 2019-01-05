const express = require('express');
const Router = express.Router();
const model = require('./model');
const utils = require('utility');
const User = model.getModel('user');


Router.get('/list',(req,res) => {
    User.remove({});

   User.find({},(error,doc) => {
       return res.json(doc);

   })

});

Router.post('/login',(req,res) => {
    const {user,pwd} = req.body;
    User.findOne({user:user,pwd:utils.md5(pwd)},{pwd:0},(err,doc) => {
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'});

        }
        res.cookie('userid',doc._id);
        return res.json({code:0,data:doc});

    })

});



Router.post('/register',(req,res) => {

   const {user,pwd,type } = req.body;
   User.findOne({user:user},(err,doc) => {
       if(doc){
           return res.json({code:1,msg:'用户名重复'});

       }
       User.create({user,type,pwd:utils.md5(pwd)},(e,d) => {
           if(e){
               return res.json({code:1,msg:'后端出错了'});

           }
           return res.json({code:0});

       })
   })


})



Router.get('/info',(req,res) => {
    const { userid } = req.cookies;
    if(!userid){
        return res.json({code:1});
    }

    User.findOne({'_id':userid},{pwd:0},(err,doc) => {
        if(err){
            return res.json({code:1,msg:'后端出错了'});

        }
        if(doc){
            return res.json({code:0,data:doc});

        }
    })
   


});


//对外接口
module.exports = Router;

