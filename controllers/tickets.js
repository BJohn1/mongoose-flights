const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

const newTicket = (req, res) => {
    Ticket.find({}, (err, tickets) => {
        res.render('tickets/new', {
          title: 'Add Ticket',
          tickets,
        })
      })
    console.log('hit new ticket')
    
}

const create = (req,res)=>{
    Flight.findById(req.params.id, (err,flight)=>{
        flight.ticket.push(req.body)
        flight.save(err=>{
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

module.exports={
    new: newTicket,
    create,
}