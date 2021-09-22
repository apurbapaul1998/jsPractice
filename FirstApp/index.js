const express=require("express");
const app=express()
// app.use((req,res)=>{
//     console.log("we got a new request")
//     console.dir(req)//it will print a massive object
//     res.send("hello we got your requests") //it will be printed on the page no mater we are requesting
//     //if we run on postman localhost:3000,we will see this info 
// })

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

//inorder to respond with content, we first need to talk about two really important objects express makes for us
//in app.use we have two different parameters in the function that are automatically passed in
//(request,response) made by express
//http req is not js objects,it's text information
//express turns it into and takes the data, parses it and turns it into an object that passes in 
//this case to a callback for use
//in chrome url search localhost:3000

//how do we handle different requests
//Routing(not specific for Express)taking incoming req and path and the response

//default routing
app.get("/",(req,res)=>{
    console.log("this is the homepage")
})
app.post("/cats",(req,res)=>{
    console.log("this is a different request")
})

app.get("/cats",(req,res)=>{
    console.log("CAt request!!!") //request is an object created by express based upon the incoming http request
    //res.send("meow!!") //response is obj made by exp both of which passed into the callback it has bunch of methods,like send,which sends ack request
    //here it's a simple string which is turning into simple html

})

app.get("*",(req,res)=>{
    //generic request at the end
})

//app.get("/dogs")  //similar like cats