class customAPIerror extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}
const createCustomError=(msg,statusCode)=>{
    return new customAPIerror(msg,statusCode);
}

module.exports={customAPIerror,createCustomError};