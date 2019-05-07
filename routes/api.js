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
router.post('/post/:nombre', postToDb)
// router.delete('/delete/:nombre', deleteFromDb)
// router.update('/update/:nombre', updateFromDb)


module.exports = router