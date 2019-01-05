const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./user');


//新建app
let app = express();

//路由转发
app.use('/user',UserRouter);




app.listen('8082',() => {
    console.log('服务器运行中');

})
