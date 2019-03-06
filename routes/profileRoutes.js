const {
    loginUser,
    logoutUser,
    allUsers,
    signupUser,
    getUser,
    updateUser,
    deleteUser,
    search
} = require('../controllers/main');
const {auth} = require('../auth_middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.json({message: "Welcome!"})
})

router.route('/api/v1/users')
    .get(allUsers)
    .post(signupUser)


router.post('/api/v1/users/login', loginUser);
router.get('/api/v1/users/logout', auth,logoutUser);
router.get('/search', search);

router.route('/api/v1/users/:id')
    .get(auth, getUser)
    .patch(auth, updateUser)
    .delete(auth, deleteUser)


module.exports = router
