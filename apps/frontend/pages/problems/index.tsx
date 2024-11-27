import { useEffect, useState } from 'react';

interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: string;
}

export default function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('/api/problems');
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      {problems.length === 0 ? (
        <p>No problems available</p>
      ) : (
        <ul>
          {problems.map((problem) => (
            <li key={problem.id}>
              <h2>{problem.title}</h2>
              <p>{problem.description}</p>
              <p>Difficulty: {problem.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
