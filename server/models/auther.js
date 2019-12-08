const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autherScema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Auther', autherScema);