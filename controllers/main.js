const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Messages = {
    "success": "It was a success!",
    "unauthorirzed": "You are not Authorized",
    "unauthenticated": "You are not Authenticated",
}

// router.get('/api/v1', (req, res) => {
//     data = {
//         "name":"John",
//         "age":30,
//         "cars": {
//           "car1":"Ford",
//           "car2":"BMW",
//           "car3":"Fiat"
//         }
//        }
//     res.json(data)
// })

// Admin only
router.post('/api/v1/sign-up/', (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(user => {
    res.json(Messages.success)
  });
});

// Admin only
router.get('/index', (req, res) => {
    User.find({}).then((users) => {
        res.json(users)
    })
})



module.exports = router
