//const app = require("express")();
const express=require("express");
const app=express();
app.use(express.static("contents"));

 app.get("/", (req, res)=>{
     res.sendFile(__dirname + "/library.html");
  })

  app.get("/admin.html", (req, res)=>{
    res.sendFile(__dirname + "/admin.html");
 })

 app.get("/about.html", (req, res)=>{
    res.sendFile(__dirname + "/about.html");
 })
 
 app.get("/user.html", (req, res)=>{
    res.sendFile(__dirname + "/user.html");
 })
 app.get("/gallery.html", (req, res)=>{
    res.sendFile(__dirname + "/gallery.html");
 })
 app.get("/contact.html", (req, res)=>{
    res.sendFile(__dirname + "/contact.html");
 })

app.get("/CRED_Admin.html", (req, res)=>{
    res.sendFile(__dirname + "/CRED_Admin.html");
})

app.listen(3333, ()=>{
    console.log("Client App running at 3333");
})