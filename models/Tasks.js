const mongoose=require('mongoose');
 const TaskSchema= new mongoose.Schema({
    name: {
type : String,
required :[true,'pleas provide a name'],
maxlength : [20,'the name is too long '],

trim:true


    },completed:{
      type:Boolean,
      default:false, 
    },
 })
 module.exports=mongoose.model('Task',TaskSchema)