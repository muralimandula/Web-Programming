var express = require('express');
var parser = require('body-parser');
const db = require('./database');
const tableName = "products";
const reviewTable = "reviews";
const path = require('path');
var flagOne = false;
var urlencoded = parser.urlencoded({extended:false});
var app = express();
var jsonparser = parser.json();
var clientDetails = [];
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/home', (req, res) => {
    db.getDB().collection(tableName).find({}).toArray((err, documents) => {
        if(err) {
            console.log(err);
        } else {
        res.send(documents);
        }
    })
});

app.post('/signup', jsonparser, (req, res) =>  {
    db.getDB().collection("user_details").insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      flagOne = true;
    });
    if(flagOne == true) {
        res.send(true);
    } 
});

app.put('/update', jsonparser, (req, res) => {
    console.log(req.body);
    db.getDB().collection("products").findOneAndUpdate({_id : "5c5c705e83146356f8b74001"},
                                                        {$set: {quantity: "18"}},
                                                        {returnOriginal: false},(err, result) => {
        if(err) throw err;
        console.log("updated");
    });
});

app.post('/review', jsonparser, (req, res) =>  {
    db.getDB().collection(reviewTable).insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
});

app.post('/reviewsInfo', jsonparser, (req, res) =>  {
    db.getDB().collection(reviewTable).find({mobileID: req.body.mid}).toArray((err, rws) =>{
      if (err) throw err;
      res.send(rws);
    });
});

app.post('/login', jsonparser, (req, res) => {
    console.log(req.url);
    console.log("hello");
    console.log(req.body);
    var query = {name :req.body.name}
    db.getDB().collection("user_details").find(query).toArray(function(err, result) {
        if(err | result.length === 0) res.send(false);
        else {
            if(result[0].password === req.body.password) {
                console.log("hai");
                res.send(true);
            } else {
                res.send(false);
            }
        }

    });

});






// app.listen(4201, '127.0.0.1', function(){
//     console.log("server is  listening 4201");
// });

db.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(4201, () => {
            console.log("server is  listening 4201");
        })
    }
})