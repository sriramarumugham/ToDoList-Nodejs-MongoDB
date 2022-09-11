const express=require('express');

const app=express();

const port =8000;

app.listen(port , function (err){

    if(err){
        console.log(`hey error in runnig server ${err}`);
        return ;
    }
    console.log(`server is up and runnig on port :${port}`);

})
