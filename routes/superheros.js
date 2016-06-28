'use strict'

const express = require('express');

let Superhero = require('../models/superhero');

let router = express.Router();


//superheros.js
//different routes using same path can be chained like this
/*router.route('/')
  .get()
  .post()*/

router.get('/', (req, res)=>{
  Superhero.find({}, (err, superheros)=>{
    if(err) return res.status(400).send(err);
    res.send(superheros);
  });
});

router.post('/', (req, res)=>{

  Superhero.create(req.body, (err, savedDoc)=>{
    res.status(err ? 400 : 200).send(err || savedDoc);
  })

  /*let superhero = new Superhero(req.body);
  //or no req.body and can set keys seperatly this way
  //superhero.name = 'wahteverIWant'

  superhero.save((err, savedDoc)=>{
   if(err) return res.status(400).send(err);
    res.send(savedDoc);
  });*/
});

router.route('/:id')
  .delete((req, res)=>{
    Superhero.findByIdAndRemove(req.params.id, err=>{
       res.status(err ? 400 : 200).send(err);
    });
  })
  .get((req, res)=>{
    Superhero.findById(req.params.id, (err, superhero)=>{
      res.status(err ? 400 : 200).send(err || superhero);
    });
  })
  .put((req, res)=>{
    Superhero.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, savedDoc) => {
       console.log("savedDoc:",savedDoc );  //is the old doc unless options object set to new
      res.status(err ? 400 : 200).send(err || savedDoc);
    });
  })


module.exports = router;





