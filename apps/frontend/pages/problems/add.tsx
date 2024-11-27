import { useState } from 'react';

export default function AddProblem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, difficulty }),
      });

      if (!response.ok) throw new Error('Failed to add problem');

      const data = await response.json();
      alert('Problem added successfully!');
      setTitle('');
      setDescription('');
      setDifficulty('Easy');
    } catch (error) {
      console.error(error);
      alert('Error adding problem');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Problem</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button type="submit">Add Problem</button>
    </form>
  );
}
