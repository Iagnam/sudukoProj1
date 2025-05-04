const express = require('express');
const router = express.Router();
const Puzzle = require('../models/Puzzle'); // make sure this path is correct

// POST /api/puzzles - Create a new puzzle
router.post('/', async (req, res) => {
  try {
    const { name, description,grid } = req.body;

    const newPuzzle = new Puzzle({ name, description,grid });
    const savedPuzzle = await newPuzzle.save();

    res.status(201).json(savedPuzzle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// (Optional) GET /api/puzzles - Get all puzzles
router.get('/', async (req, res) => {
  try {
    const puzzles = await Puzzle.find();
    res.json(puzzles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/api/puzzles/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const puzzle = await Puzzle.findByIdAndDelete(id);
    if (!puzzle) {
      return res.status(404).json({ message: 'Puzzle not found' });
    }
    res.json({ message: 'Puzzle deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

module.exports = router;
