const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Messages = {
    "success": "It was a success!",
    "unauthorirzed": "You are not Authorized",
    "unauthenticated": "You are not Authenticated",
}

// INDEX - ALL
/** show all users */
const allUsers = (req, res) => {
    User.find({}).then((users) => {
        // return json - display all users
        res.json(users)
    }).catch((err) => res.send(err.message))
}
// CREATE / SIGNUP
/** Sign up users/ register them */
const signupUser = (req, res) => {
    const user = new User(req.body);
    user.save().then((user) => {
        var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.redirect('/api/v1/users');
    })
}

// LOGIN
/** have users login <- don't worry about this */
const loginUser = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  // Find this user name
  User.findOne({ email }, "username password")
    .then(user => {
      if (!user) {
        // User not found
        return res.status(401).send({ message: "Wrong Username or Password" });
      }
      // Check the password
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          return res.status(401).send({ message: "Wrong Username or password" });
        }
        // Create a token
        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET, {
          expiresIn: "60 days"
        });
        // Set a cookie and redirect to root
        res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });

        res.json({user})
      });
    })
    .catch(err => {
      console.log(err);
    });
};
//LOGOUT
/** have users logout <- don't worry about this */
const logoutUser = (req, res) => {
  res.clearCookie('nToken');
  res.json({"User" : "Successfully logged out."});
};
// READ
/** Get an individual user */
const getUser = (req, res) => {
    User.findById(req.params.id).then(user => {
        // return json - display the individual user
        res.json(user)
    }).catch(err => res.send(err.message))
}
// UPDATE
/** When a user wants to update their profile */
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((user) => {
        // return json - success
        res.json(Messages.success)
    }).catch((err) => res.send(err.message));
}
// DELETE
/** When a user wants to delete their profile */
const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id).then((user) => {
        // return json saying it was a success
        res.json(Messages.success)
    }).catch((err) => res.send(err.message))
}

module.exports = {
    loginUser,
    logoutUser,
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser
}
