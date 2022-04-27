const express = require('express')
var empRouter = express()

const create = require('../controller/emp')
// const view = require('../controller/emp')
const bodyparser = require('body-parser');

empRouter.use(bodyparser.json())
empRouter.post('/create',create.create)
// router.get('/',view.view)

module.exports = empRouter;