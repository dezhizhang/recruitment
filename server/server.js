const express = require('express');

//新建app
let app = express();

app.get('/',(req,res) => {
    res.send('hello');

})

app.get('/api/data',(req,res) => {
    res.json({'name':'zhang','value':'123'});
    
})

app.listen('8082','localhost',() => {
    console.log('node在运行中');

});

