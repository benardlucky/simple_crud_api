const express = require('express')

//making use of express routes
const router = express.Router()
// to get the handle of the schema
const Alien = require('../models/alien')
// a get request routes to fectch all data
router.get('/', async(req, res) => {
    try{
            //ussing async by using await for this
            const aliens = await Alien.find()
            //to return your respond in a json format
            res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})
// a get request route to fetch a single data
router.get('/:id', async(req,res) => {
    try{
            //ussing async by using await for this
            const alien = await Alien.findById(req.params.id)
            //to return your respond in a json format
            res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})
//post request route
router.post('/',async(req,res) =>{
    //creating a post request object

    const { surname, firstname, email, sub } = req.body
    const alien = new Alien({
        surname: surname,
        firstname: firstname,
        email: email,
        sub: sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
 // a patch request to fetch a single field
 router.patch('/:id', async(req,res) =>{
     try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
     }catch(err){
         res.send('Error')
     }
 })
// delete request to remove a data from a database
router.delete('/:id', async(req,res) =>{
     try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.remove()
        res.json(a1)
     }catch(err){
         res.send('Error')
     }
 })
// export this module so that it will be accessible in app.js
module.exports = router 