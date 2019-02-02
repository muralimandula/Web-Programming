var express = require('express');

var prodController = require('./controllers/prodControl')

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

prodController(app);

app.listen(8000);

console.log('listening product');