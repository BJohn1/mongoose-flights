const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.post('/', ticketsCtrl.create)
router.get('/new', ticketsCtrl.showTicket)
router.post('/:id', ticketsCtrl.new)

module.exports = router;