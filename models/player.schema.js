var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
   name: {type: String, unique: true},
   rating: Number,
   leaguePoints: Number,
   rankedMatches: [String],
   leagueMatches: [String]
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;