const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.post("/",(req,res)=>{
    res.send('got a Post request')
})  


app.put("/user", (req,res)=>{
    res.send("got a Put request")
})

app.delete('/user',(req,res)=>{
    res.send('got a Del request ')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})