const express = require('express');
const user = require('./backend.json');
const app = express();
var arr6=[];
var arr8=[];
app.get("/user/vacancy",(req,res)=>{
    for (var i=0;i<user.length;i++) {
        arr3.push(user[i].job_vacancy);
    }
    arr3.sort((a,b)=>a-b);
    for (var j=0;j<arr3.length;j++) {
           if (arr3[arr3.length-1]===user[i].job_vacancy) {
               arr8.push(user[i])
           }
    }

    res.send({arr8});
})

app.listen(1668,function (){
    console.log('listening on port 6234');
})