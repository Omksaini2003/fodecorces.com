"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { PrismaClient } from '@prisma/client';
const dotenv_1 = __importDefault(require("dotenv"));
const problems_1 = __importDefault(require("./routes/problems"));
// const prisma = new PrismaClient();
const prismaClient_1 = require("./prismaClient");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/problems', problems_1.default);
app.get('/problems', async (req, res) => {
    const problems = await prismaClient_1.prisma.problem.findMany();
    res.json(problems);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
