let jwt = require('jsonwebtoken');
let config = require('./config');


let middleware=(req,res,next)=>{
    let token= req.hedders.token || req.hedders.userToken || req.authorization;
    jwt.verify(token,config.jwt.secret, function(err,decodedData){
        if(err){
            res.status(401).json({status:false, message: 'Not Authorized'})
        }else{
            req.jwt = decodedData;
            next();
        }
    }) 
}

module.exports = middleware;