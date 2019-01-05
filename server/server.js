const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const UserRouter = require('./user');


//新建app
let app = express();

//使用中间件
app.use(cookieParser());
app.use(bodyParser.json());


//路由转发
app.use('/user',UserRouter);




app.listen('8082',() => {
    console.log('服务器运行中');

})
