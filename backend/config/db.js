require('dotenv').config();
const mongoose = require('mongoose');
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const mongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo is connected successfully');
    }catch(err){
        console.error(err);
        console.log('Mongo does not connected');
    }
}

module.exports = mongoDB; 