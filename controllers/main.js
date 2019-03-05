const express = require('express');
const router = express.Router();

router.get('/api/v1', (req, res) => {
    data = {
        "name":"John",
        "age":30,
        "cars": {
          "car1":"Ford",
          "car2":"BMW",
          "car3":"Fiat"
        }
       }
    res.json(data)
})

module.exports = router 