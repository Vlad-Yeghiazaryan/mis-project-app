var express = require('express')
var router = express.Router()
var { indexPageControl } = require('../controllers/page_controller')
var { dbControl } = require('../controllers/db_controller')

/* GET home page. */
router.get('/', indexPageControl)
router.post('/', dbControl)

module.exports = router
