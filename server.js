const express= require('express');
const hbs=require('hbs');

var app=express();


hbs.registerPartials(__dirname + '/views/Partials')
app.set('view engine','hbs');
app.get('/',(req,res) => {
  res.render('Home.hbs');
});
app.get('/about',(req,res) => {
  res.render('about.hbs');
});
app.get('/business',(req,res) => {
  res.render('business.hbs');
});
app.get('/contact',(req,res) => {
  res.render('contact.hbs');
});
app.get('/entertainment',(req,res) => {
  res.render('entertainment.hbs');
});

app.get('/extraa',(req,res) => {
  res.render('extraa.hbs');
})
app.get('/sports',(req,res) => {
  res.render('sports.hbs');
})
app.listen(3000);
console.log("starting server");
