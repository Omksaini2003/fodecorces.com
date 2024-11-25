import axios from 'axios';
import { useState, useEffect } from 'react';

type Problem = {
  id: number;
  title: string;
  description: string;
  difficulty: string;
};

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/problems').then((response) => {
      setProblems(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <strong>{problem.title}</strong> - {problem.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
}
