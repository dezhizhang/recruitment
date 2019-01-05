const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/boss';

mongoose.connect(db_url);

const models = {
    user:{
        'user':{type:String,default:true},
        'pwd':{type:String,default:true},
        'type':{type:String,default:true},
        'avatar':{type:String},
        'desc':{type:String},
        'title':{type:String},
        'company':{type:String},
        'money':{type:Number}

    }

}


for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]));

}


module.exports = {
    getModel:function(name){
        return mongoose.model(name);

    }
}


