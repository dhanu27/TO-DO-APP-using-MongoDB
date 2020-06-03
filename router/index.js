const express=require('express');


const router=express.Router();
const homeController=require('../Controllers/homecontroller');

// request for home page 
router.get('/',homeController.home);

// To add the task 
router.post('/addtask',homeController.addtask);

// to delete the task 
router.post('/delete-task',homeController.deleteTask);

module.exports=router;