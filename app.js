const express = require('express');
const user = require('./backend.json');
const app = express();
var arr=[];


app.use(express.json());
app.get("/user/:city",(req,res)=>{
    
        if (req.params.city==="venezuela"){

            for (var i=0;i<user.length;i++) {
                  if (user[i].skill==="js") {
                      arr.push(user[i].job)
                  }
            }
        }
        res.send({arr});
})

app.listen(1234,function (){
    console.log('listening on port 1234');
})