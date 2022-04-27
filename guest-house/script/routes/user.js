const express = require('express')
var router = express()

const create = require('../controller/userController')
const view = require('../controller/userController')
const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)

module.exports = router;