const express = require('express');
const user = require('./backend.json');
const app = express();
var arr2=[];

app.get("/user/:notice_period",(req,res)=>{
    
    if (req.params.notice_period>=2){
        for (var i=0;i<user.length;i++) {
            if (user[i].notice_period>=2) {
                arr2.push(user[i]);
            }
      }
    
    }
    res.send({arr2});
})
app.listen(2346,function (){
    console.log('listening on port 2346');
})