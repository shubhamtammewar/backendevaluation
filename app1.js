const express = require('express');
const user = require('./backend.json');
const app = express();

var arr1=[];


app.get("/user/:job_nature",(req,res)=>{
    
    if (req.params.job_nature==="work from home"){
        for (var i=0;i<user.length;i++) {
            if (user[i].job_nature==="work from home") {
                arr1.push(user[i]);
            }
      }
    
    }
    res.send({arr1});
})
app.listen(2345,function (){
    console.log('listening on port 2345');
})