var express = require('express');
var router = express.Router();
var Match = require('../models/match.schema.js');

// Get all matches
router.get('/', function(req, res) {
   Match.find({}, function(err, results){
      if(err){
         console.error(err);
         res.send(err);
      }else{
         console.log("get /matches successful");
         res.json(results);
      }
   })
});

// Save match
router.post('/saveMatch', function(req, res){
   var match = new Match();
   match.player1 = req.body.player1;
   match.player2 = req.body.player2;
   match.datePlayed = req.body.datePlayed;
   match.winner = req.body.winner;
   match.mode = req.body.mode;

   match.save(function(err, match){
      if(err){
         console.log(err);
         res.status(500).send('Error saving match');
      }else{
         res.json(match);
      }
   })
})

module.exports = router;
