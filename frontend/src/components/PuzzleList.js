import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PuzzleViewer from './Puzzleviewer'; // you'll need to create this file
import './PuzzleList.css';

const PuzzleList = () => {
  const [puzzles, setPuzzles] = useState([]);
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  useEffect(() => {
    const fetchPuzzles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/puzzles');
        setPuzzles(res.data);
      } catch (error) {
        console.error('Failed to fetch puzzles:', error);
      }
    };
    fetchPuzzles();
  }, []);

  return (
    <div>
      <h2>All Puzzles</h2>
      {puzzles.map((puzzle) => (
        <div
          key={puzzle._id}
          onClick={() => setSelectedPuzzle(puzzle)}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', cursor: 'pointer' }}
        >
          <h3>{puzzle.name}</h3>
          <p>{puzzle.description}</p>
        </div>
      ))}

      {selectedPuzzle && (
        <div>
          <h2>Playing: {selectedPuzzle.name}</h2>
          <PuzzleViewer grid={selectedPuzzle.grid} />
        </div>
      )}
    </div>
  );
};

export default PuzzleList;
