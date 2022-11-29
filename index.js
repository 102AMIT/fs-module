const express=require("express");
const port=4000;

const app=express();

// use for body when we are passing the data from front end 

app.use(express.urlencoded());

// set the view engine

app.set('view engine','ejs')
app.set('views','./views')

// for use routes

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("error in server Running up !",err)
    }
    else{
        console.log(`Server is running on port :${port}`)
    }
})