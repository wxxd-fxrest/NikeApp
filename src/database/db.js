const { MongoClient } = require('mongodb');
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.8qybqfs.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri); 

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders,
};