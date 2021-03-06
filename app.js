const express=require('express');
const app=express();

const path=require('path');
let puerto=3030;
app.use(express.static('public'));

app.listen(puerto,()=>
console.log('Servidor Corriendo'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/index.html'));
});

app.get('/babbage',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/babbage.html'));
});

app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/berners-lee.html'));
});

app.get('/clarke',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/clarke.html'));
});

app.get('/hamilton',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/hamilton.html'));
});

app.get('/hopper',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/hopper.html'));
});

app.get('/lovelace',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/lovelace.html'));
});

app.get('/turing',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/turing.html'));
});

app.get('/*',(req,res)=>{
    res.send("404");
});