const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
console.log('cni');

var app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('year',()=> {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text) => {
return text.toUpperCase();
})
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => 
{
res.render('home.hbs',{
    message: 'kaala karigalan',
    day: new Date().getDate()
});
});

app.get('/selva',(req,res) => {
    res.render('selva.hbs',{
        message: 'Sanda potu kaakuravan',
        day: new Date().getDate(),
        name: 'SELVARBASKAR',
        likes: [
            'FOOTBALL','CRICKET'
        ]
    });
});

app.get('/bad',(req,res) => {
    res.send({
      errormsg: 'unable to connect'
    });
});
app.listen(port,() => {
    console.log(`SERVER is up on port ${port}`);
});
