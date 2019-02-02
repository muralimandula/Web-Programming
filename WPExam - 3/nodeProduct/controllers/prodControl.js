var bodyParser = require('body-parser');

var filestream = require('fs');

var encodingParser = bodyParser.urlencoded({extended: true});

var data = filestream.readFileSync('controllers/prodInfo.json');

var prodData = JSON.parse(data);

console.log(prodData);

module.exports = function(app) {
    app.get('/', (req, res)=>{
        res.render('prodCat.ejs', {datanew:prodData})
    });
    app.post('./', encodingParser, (req, res) => {

    });
}