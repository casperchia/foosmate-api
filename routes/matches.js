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
   var name = req.body.name;
   var updatedData = {
      rating: req.body.rating,
      leaguePoints: req.body.leaguePoints,
      rankedMatches: req.body.rankedMatches,
      leagueMatches: req.body.leagueMatches,
   }
   Player.update({name: name}, updatedData, function(err, data){
      if(err){
         res.send(err);
      }else{
         res.json(data);
      }
   })

})

// Add new player
router.post('/addPlayer', function(req, res){
   var player = new Player();
   player.name = req.body.name;
   player.rating = 1000;
   player.leaguePoints = 0;
   player.rankedMatches = [];
   player.leagueMatches = [];

   player.save(function(err, player){
      if(err){
         console.log(err);
         res.status(500).send('Please enter another name');
         // res.send(err);
      }else{
         res.json(player);
      }
   })
})

module.exports = router;
