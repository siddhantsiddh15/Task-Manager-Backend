const mongoose = require('mongoose')


const connectDB = (url) => {
        //connectDB is returning a promise
        // so in app.js we are using an async await and 
        // putting the code in try - catch block so we execute the app only if our promise is returned successfully
    return mongoose.
        connect(url)
        
}

module.exports = connectDB


