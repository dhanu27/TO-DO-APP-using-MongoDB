const db=require('../config/mongoose');
const Task=require('../Models/Task_DB');

// Categories
var Category =['Personal','Work','School','Cleanning','Other'];

// To get the all Tasks Form DataBase 
module.exports.home=function(req,res){
   Task.find({},function(err,TaskData){
      if(err){
          console.log("Model Error");
          return ;
      }
      res.render('app',{
        title:"TO DO APP",
        category:Category,
        tasks:TaskData,
    });
   });
};

// To add the task in the database
module.exports.addtask=function(req,res){
   var inputobj=req.body;
   console.log(inputobj);
    Task.create({
        description:inputobj.description,
        category:inputobj.category,
        dueDate:inputobj.duedate,
        iscomplete:false
    },function(err,TaskData){
        if(err){
            console.log("Error While Populating");
            return res.redirect('back');
        }
        else
           return res.redirect('/'); 
    });
}

//  to delete the Task from Database
module.exports.deleteTask=function(req,res){
    if(req.body.deleteId){
        Task.findByIdAndDelete(req.body.deleteId,function(err,TaskData){
          if(err){ console.log("Error In Deleting ");  return res.redirect('back');}
           console.log(TaskData);
          return res.redirect('/');
        });
    }
    else{
        return res.redirect('back');
    }
}
