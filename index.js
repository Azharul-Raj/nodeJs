const express=require('express');
const path=require('path')

const app=express()
app.listen(3000,()=>console.log(`Server listening.`))
app.get('/',(req,res)=>{
    res.send("this is the server")
})

app.get('/html_page',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'./','views','index.html'))
})