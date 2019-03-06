const {
    loginUser,
    logoutUser,
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/main');
const {auth} = require('../auth_middleware/auth');
const express = require('express');
const router = express.Router();

router.route('/api/v1/users')
    .get(auth, allUsers)
    .post(signupUser)


router.post('/api/v1/users/login', loginUser);
router.get('/api/v1/users/logout', auth,logoutUser);

router.route('/api/v1/users/:id')
    .get(auth, getUser)
    .patch(auth, updateUser)
    .delete(auth, deleteUser)


module.exports = router
