const express = require('express'),
app = express(),
PORT = process.env.PORT || 4000;
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to Page</h1>`)
})
app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));