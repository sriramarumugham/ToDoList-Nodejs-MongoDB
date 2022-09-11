const { render } = require('ejs');
const express=require('express');

const app=express();

const port =8000;


//setting view engine;
app.set('view engine' , 'ejs');

app.set('views' , render('./views'))

//setting up the middleware;

app.use('/' , require('./routes/index'))

//conntecting asserts

app.use(express.static("asserts"));


app.listen(port , function (err){

    if(err){
        console.log(`hey error in runnig server ${err}`);
        return ;
    }
    console.log(`server is up and runnig on port :${port}`);

})
