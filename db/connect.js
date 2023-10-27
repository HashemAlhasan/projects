const  mongoose=require('mongoose');


const connectToDB= (url) => {
    mongoose.connect(url,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}
module.exports=connectToDB