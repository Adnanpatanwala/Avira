const mongoose = require('mongoose');

const connectToDb = (url)=>{
    return mongoose.connect(url).then(()=>console.log('connected to db'));
}
module.exports = connectToDb;