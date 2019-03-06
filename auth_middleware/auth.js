const User = require('../models/User');
// middle for authorization
const auth = (req, res, next) => {
  let cookie = req.headers.cookie;
  
  console.log(cookie)
  // parse the cookie everything from nToken={everything after the equal sign}
  // decode the jwt
  // in the payload get the user id and findById
    // if no user is found return error kick the mf out
    // else return success to the next

  next();
}

module.exports = {
  auth
}
