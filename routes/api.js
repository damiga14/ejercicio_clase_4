var express = require('express')

var router = express.Router();

var {getFromDb, postToDb, deleteFromDb, updateFromDb} = require('../controllers/index.js')


router.get('/', function(req, res)
{
    res.send({
        mensaje:"API Home"
    })
})


router.get('/get', getFromDb)
router.post('/post', postToDb)
router.delete('/delete', deleteFromDb)
router.put('/update', updateFromDb)


module.exports = router