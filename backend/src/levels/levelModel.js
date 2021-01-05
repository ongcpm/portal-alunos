const mongoose = require('mongoose')

const levelSchema = new mongoose.Schema({
  levelInfo: {
    levelName: { type: String, required: true }
  },
  status: {
    type: Boolean,
    default: true
  } 
}, 
{ timestamps: true});

// Criamos o Model
const Level = mongoose.model("Level", levelSchema);

module.exports = Level