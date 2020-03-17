var express = require('express')
var router = express.Router()
var { indexPageControl } = require('../controllers/page_controller')
var { dbControl } = require('../controllers/db_controller')
var { refreshControl } = require('../controllers/refreshControl')

/* GET home page. */
router.get('/', indexPageControl)
router.post('/', dbControl)
router.get('/refresh', refreshControl)

module.exports = router
