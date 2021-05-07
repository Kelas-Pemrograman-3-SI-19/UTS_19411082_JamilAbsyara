const router = require('express').Router()
const topupController = require('../Controller/topup')

router.post('/insert', (req, res) => {
    topupController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    topupController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    topupController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router