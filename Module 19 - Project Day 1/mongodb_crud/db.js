const MongoClient = require("mongodb").MongoClient;
// getting clinet access connection from mongo module

const ObjectID = require('mongodb').ObjectID;
// an objectId from mongo module

const dbname = "crud_mongodb";
// naming our database

const url = "mongodb://localhost:27017";
// locating our local mongodb 

const mongoOptions = {useNewUrlParser : true};


// above configuration establishes connection between 
// mongo and node

const state = {
    db : null 
};
// above id default state

const connect = (cb) =>{
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions,(err, client)=>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};