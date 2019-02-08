const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const path = require('path');
const db = require("./db");

// const Joi = require('joi');

const tablename = "products";

const reviewtable = "reviews";




app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getProducts', (req, res)=> {
    db.getDB().collection(tablename).find({}).toArray((err, documents)=> {
    if(err)
        console.log("error");
    else {
        console.log("retrieving products info.....");
        console.log(documents);
        res.json(documents);
    }
    });
});

app.put('/:id', (req, res)=>{
    const productsID = req.params.id;
    const inputinfo = req.body;

    db.getDB().collection(tablename).findOneAndUpdate({_id : db.getPrimaryKey(productsID)},
                                                        {$set : {name : inputinfo.name, quantity : inputinfo.quantity}},
                                                        {returnOriginal : false}, (err, result)=>{
        if(err)
            console.log(err);
        else{
            res.json(result);
            console.log("performed put/update operation on your DB!")
            // console.log(result);
        }
    });
});

db.connect((err)=>{
    if(err){
        console.log(err);
        console.log("Unable to connect");
        process.exit(1);
    }
    else{
        app.listen(5000,()=>{
            console.log("Connected to mongoDB shopping_cart data!!");
        // process.exit(1);

        });
    }
});