const mongoose = require('mongoose');

const puzzleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  grid: {
    type: [[Number]],  // 2D array for the grid (e.g., a 9x9 grid for Sudoku)
    required: true // Grid is also required
  }
}, { timestamps: true });

module.exports = mongoose.model('Puzzle', puzzleSchema);
