const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/',controller.getHomepage)
router.post('/',controller.getHomepage)

router.get('/one/:id',controller.one_post)

router.get('/delete/:id',controller.delete_post)

router.post('/update/:id',controller.update_post)



module.exports = router