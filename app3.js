const express = require('express');
const user = require('./backend.json');
const app = express();
var arr3=[];
var arr4=[];
app.get("/user/sort",(req,res)=>{
    for (var i=0;i<user.length;i++) {
        arr3.push(user[i].rating);
    }
    arr3.sort((a,b)=>a-b);
    for (var j=0;j<arr3.length;j++) {
          for (var k=0;k<arr3.length;k++) {
                  if (arr3[j]===user[k].rating) {
                      arr4.push(user[k]);
                  }
          }
    }

    res.send({arr4});
})

app.listen(6234,function (){
    console.log('listening on port 6234');
})