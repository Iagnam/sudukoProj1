import React from 'react';
import PuzzleForm from './components/PuzzleForm';
import PuzzleList from './components/PuzzleList';

function App() {
  return (
    <div className="App">
      <h1>Sudoku Puzzle Manager</h1>
      <PuzzleForm />
      <PuzzleList />
    </div>
  );
}

export default App;
