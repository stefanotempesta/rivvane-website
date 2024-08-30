const express = require('express')

const router = express.Router()

router.get('/about', function(req, res) {
    res.render('customer/about/why-fit-in')
})

module.exports = router