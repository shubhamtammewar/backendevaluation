const express = require('express');
const user = require('./backend.json');
const app = express();

app.get("/user/:info_company",(req,res)=>{
    for (var i=0;i<user.length;i++) {
        if (req.params.info_comapny===user[i].info_company) {
             var a=user[i].info_company;
        }
    }
   res.send(a);

})
app.listen(3468,function (){
    console.log('listening on port 3468');
})