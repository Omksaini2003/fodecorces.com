import express from 'express';
import { prisma } from '../prismaClient';
import { Request, Response } from 'express';  // Import types

const router = express.Router();

// Create a new problem
router.post('/', async (req: Request, res: Response) => {
  const { title, description, difficulty } = req.body;

  if (!title || !description || !difficulty) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const problem = await prisma.problem.create({
      data: { title, description, difficulty },
    });
    res.status(201).json(problem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create problem' });
  }
});

// Fetch all problems
router.get('/', async (req, res) => {
  try {
    const problems = await prisma.problem.findMany();
    res.json(problems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

export default router;
