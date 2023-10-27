class customeAPIError extends Error{
    constructor(msg ,statusCode) {
        super(msg);
        this.statusCode=statusCode
    }
}
const createCustomeError = (msg ,statusCode)=>{
    return new customeAPIError(msg,statusCode)
}
module.exports={
    customeAPIError,
    createCustomeError,
}