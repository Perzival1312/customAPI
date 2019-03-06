const express = require('express');
const User = require('../models/User')
const Messages = {
    "success": "It was a success!",
    "unauthorirzed": "You are not Authorized",
    "unauthenticated": "You are not Authenticated",
}

// INDEX - ALL
/** show all users */
const allUsers = () => {

}
// CREATE / SIGNUP
/** Sign up users/ register them */
const signupUser = () => {

}

// LOGIN
/** have users login <- don't worry about this */

//LOGOUT
/** have users logout <- don't worry about this */

// READ
/** Get an individual user */
const getUser = () => {

}
// UPDATE
/** When a user wants to update their profile */
const updateUser = () => {

}
// DELETE
/** When a user wants to delete their profile */
const deleteUser = () => {

}



module.exports = {
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser
}
