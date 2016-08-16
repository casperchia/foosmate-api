var mongoose = require('mongoose');

var matchSchema = mongoose.Schema({
   player1: {name: String, score: Number},
   player2: {name: String, score: Number},
   datePlayed: {type: String, required: true},
   winner: String,
   mode: {type: String, required: true}
});

var Match = mongoose.model('Match', matchSchema);

module.exports = Match;