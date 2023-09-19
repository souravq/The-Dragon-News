const express = require("express");

const categoriesData = require("./Mock-Data/categories.json");

const app = express();

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send(categoriesData);
    console.log("Hello");
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})