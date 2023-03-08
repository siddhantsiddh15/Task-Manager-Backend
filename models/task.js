const mongoose = require('mongoose');

// setting up the schema here

const TaskSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('Task', TaskSchema)