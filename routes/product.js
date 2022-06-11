const express = require('express')
const router = express.Router()

router.get('/cart', (req, res) => {
    res.render('cart-shopping', {
        title: 'Корзина',
    })
})
router.get('/delivery', (req, res) => {
    res.render('delivery', {
        title: 'Доставка',
    })
})

module.exports = router