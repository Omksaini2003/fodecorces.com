"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
function Home() {
    const [problems, setProblems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default.get('http://localhost:5000/problems').then((response) => {
            setProblems(response.data);
        });
    }, []);
    return (<div>
      <h1>Problem List</h1>
      <ul>
        {problems.map((problem) => (<li key={problem.id}>
            <strong>{problem.title}</strong> - {problem.difficulty}
          </li>))}
      </ul>
    </div>);
}
exports.default = Home;
