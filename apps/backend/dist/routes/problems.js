"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prismaClient_1 = require("../prismaClient");
const router = express_1.default.Router();
// Create a new problem
router.post('/', async (req, res) => {
    const { title, description, difficulty } = req.body;
    if (!title || !description || !difficulty) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const problem = await prismaClient_1.prisma.problem.create({
            data: { title, description, difficulty },
        });
        res.status(201).json(problem);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create problem' });
    }
});
// Fetch all problems
router.get('/', async (req, res) => {
    try {
        const problems = await prismaClient_1.prisma.problem.findMany();
        res.json(problems);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
});
exports.default = router;
