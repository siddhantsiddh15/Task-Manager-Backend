const Task = require('../models/task');


const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({}, {__v: false});
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).json({msg:error});
    }
}

const createTask = async (req,res) => {

    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch (error) {
        res.status(500).json({msg:error});
    }
}

const getTask = async (req,res) => {
   
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID}, {__v:0});

        if(!task){
            // the id does not exist. Make sure to pass a return statement in this block
            return res.status(404).json({msg: `No task was found with Task Id : ${taskID}`});
        }
        res.status(200).json({task});
    }catch (err) {
        res.status(500).json({msg:err})
    }
    
}



const deleteTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});

        if(!task){
            return res.status(404).json({msg: `No task was found with id : ${taskID}`});
        }

        return res.status(200).json({task})

    }catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new : true,
            runValidators:true
        });

        // put validators and options so that we don't allow passing an empty value
        if(!task){
            // the id does not exist. Make sure to pass a return statement in this block
            return res.status(404).json({msg: `No task was found with Task Id : ${taskID}`});
        }
        res.status(200).json({task})
    }catch (err){
        res.status(500).json({msg:err})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} 