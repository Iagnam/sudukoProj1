import React from 'react';
import './sudokuGrid.css'; // we’ll create this CSS next

const PuzzleViewer = ({ grid }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              className="sudoku-cell"
              type="text"
              maxLength="1"
              defaultValue={cell !== 0 ? cell : ''}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PuzzleViewer;
