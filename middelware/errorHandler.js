const {customeAPIError}=require('../error/customError')


const errorHandler =(err,req,res,next)=> {
    if(err instanceof customeAPIError) {
       return res.status(err.statusCode).json({msg:err.msg})
    }
    return res.status(500).json({msg:`Something Went Wrong ,Tru Agian Later...`})
}
module.exports=errorHandler;