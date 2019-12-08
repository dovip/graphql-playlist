const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


mongoose.connect("mongodb+srv://dovip:abcd1234@cluster0-2slea.azure.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once('open',()=>{
    console.log('the db is open');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log('test1');
})