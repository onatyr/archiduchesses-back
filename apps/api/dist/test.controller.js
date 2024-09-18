"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testController = void 0;
const express_1 = __importDefault(require("express"));
exports.testController = (0, express_1.default)();
exports.testController.get("/", (req, res) => {
    console.log("youhou");
    res.status(200).json();
});
// async (req: express.Request, res: express.Response, next: NextFunction)
