
const express = require('express');

const app = express();
const tasks = require('./routes/tasks')
const connectDB =require('./database/connect');

require('dotenv').config();


// middleware
app.use(express.static('./public'));
app.use(express.json());


// routes


app.use('/api/v1/tasks', tasks)

// get all tasks - app.get('/api/v1/tasks')
// create a new task - app.post('/api/v1/tasks')
//  get a single task - app.get('/api/v1/tasks/:id')
//  update a task - app.patch('/api/v1/tasks/:id')
// delete a task - app.delete('/api/v1/tasks/:id')

const PORT = 3000;

const startServer = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log('Server is listening on PORT ', PORT, ' ...'));
    }catch(err){
        console.log(err)
    }
};

startServer();

