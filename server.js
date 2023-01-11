const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')

 app.set('view engine', 'ejs');

 app.use(express.static(path.join(__dirname, 'public')));


 app.get('/styles.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'styles.css'));
});

 app.set('view engine', 'ejs');

 app.get('/search', (req, res) => {
  res.render('search');
});


app.get('/om', (req, res) => {
  res.render('om');
});

 app.get('/kart', (req, res) => {
    res.render('kart');
  });
  app.get('/index', (req, res) => {
    res.render('index');
  });


app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});