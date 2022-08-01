const jwt = require('jsonwebtoken');


// function authMiddleware(req, res, next) {

//     let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
//     try {
//         const token = req.header(tokenHeaderKey);
//         console.log(token)
//         const verified = jwt.verify(token, jwtSecretKey);
//         if(verified){
//             next();
//         }else{

//             return res.status(401).send(error);
//         }
//     } catch (error) {

//         return res.status(500).send(error);
//     }
// }
// module.exports = authMiddleware;

function authMiddleware (req, res, next) {

    const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
  
      const bearerToken = bearerHeader.split(" ")[1];
  
      req.token = bearerToken;
  
      next();
  
    } else {
  
      res.sendStatus(403);
  
    }
  
  }
 module.exports = authMiddleware;
