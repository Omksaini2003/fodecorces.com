import express, { Request, Response } from 'express';
import cors from 'cors';
// import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import problemRoutes from './routes/problems';

// const prisma = new PrismaClient();

import { prisma } from './prismaClient';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/problems', problemRoutes);

app.get('/problems', async (req: Request, res: Response) => {
  const problems = await prisma.problem.findMany();
  res.json(problems);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));


