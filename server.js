import express from 'express';
import schema from './data/schema';
import {MongoClient} from 'mongodb';
import GraphQLHTTP from 'express-graphql';
//let bodyParser = require('body-parser');
import open from 'open';

let app = express();
app.use(express.static('public'));

let db;
let counter = 0;

app.use('/graphql', GraphQLHTTP({
    schema :schema(db),
    graphiql:true
}));


MongoClient.connect("mongodb://asifshaik:login%40123@ds155473.mlab.com:55473/graphqldb", (err, database) => {
    if(err) throw err;
    db = database;      
    
    app.listen(3000, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('opening at http://localhost:3000');  
        open('http://localhost:3000');
      }
    }); 
  

});
    
app.get("/data/links", (req, res) => {
        db.collection("links").find({}).toArray((err, links) => {
        if(err) throw err;
        res.json(links);
    });        
});


    
