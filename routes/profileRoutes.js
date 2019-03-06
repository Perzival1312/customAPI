const {
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/main');

const express = require('express');
const router = express.Router();

router.route('/api/v1/users')
    .get(allUsers)
    .post(signupUser)

router.route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)


module.exports = router