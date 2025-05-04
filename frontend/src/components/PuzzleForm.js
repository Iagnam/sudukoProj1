import React, { useState } from 'react';
import axios from 'axios';
import './PuzzleForm.css';


const PuzzleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    grid: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const gridArray = JSON.parse(formData.grid);
      await axios.post('http://localhost:5000/api/puzzles', {
        name: formData.name,
        description: formData.description,
        grid: gridArray
      });
      alert('Puzzle added successfully!');
    } catch (error) {
      alert('Error adding puzzle');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Puzzle</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} required /><br />
      <textarea name="grid" placeholder="Enter 2D array (e.g. [[5,3,0...],...])" onChange={handleChange} required></textarea><br />
      <button type="submit">Add Puzzle</button>
    </form>
  );
};

export default PuzzleForm;
