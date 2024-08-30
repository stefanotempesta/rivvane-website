const express = require('express')

const router = express.Router()

router.get('/stratergy', function(req, res) {
    res.render('customer/stratergy/no-limits-just-freedom')
})

module.exports = router