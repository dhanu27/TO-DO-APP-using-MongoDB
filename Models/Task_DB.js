var mongoose=require('mongoose');

// TaskSchema
var TaskSchema=new mongoose.Schema({
    description:{
      type:String,
      required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }
});

const Task=mongoose.model('TaskModel',TaskSchema);

module.exports=Task;