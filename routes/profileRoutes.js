const {
    loginUser,
    logoutUser,
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/main');

const express = require('express');
const router = express.Router();

router.route('/api/v1/users')
    .get(/* secure this route*/ allUsers)
    .post(signupUser)


router.post('/api/v1/users/login', loginUser);
router.get('/api/v1/users/logout' /* secure this route*/,logoutUser);

router.route('/api/v1/users/:id')
    .get(/* secure this route*/ getUser)
    .patch(/* secure this route*/ updateUser)
    .delete(/* secure this route*/ deleteUser)


module.exports = router
