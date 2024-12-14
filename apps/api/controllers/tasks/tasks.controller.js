"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksController = void 0;
const express_1 = __importDefault(require("express"));
const tasks_query_1 = require("./tasks.query");
exports.tasksController = (0, express_1.default)();
exports.tasksController.get('/all', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = yield (0, tasks_query_1.getAllTasksWithPlant)(req.userId);
        res.status(200).json(allTasks);
    }
    catch (e) {
        console.error(e instanceof Error ? e.message : e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));
