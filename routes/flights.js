const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')
const ticketsCtrl = require('../controllers/tickets')

/* GET users listing. */

router.get('/', flightsCtrl.index);
router.get('/filter', flightsCtrl.filter);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.delete);
router.post('/', flightsCtrl.create);

module.exports = router;
