"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.isExempted = isExempted;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const node_process_1 = __importDefault(require("node:process"));
dotenv_1.default.config({
    path: path_1.default.resolve(node_process_1.default.cwd(), '.env'),
});
function authenticate(req, res, next) {
    var _a;
    try {
        if (isExempted(req.path))
            return next();
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token || !node_process_1.default.env.ACCESS_TOKEN_SECRET)
            return res.status(401).json();
        (0, jsonwebtoken_1.verify)(token, node_process_1.default.env.ACCESS_TOKEN_SECRET, (err, userPayload) => {
            const user = userPayload;
            console.log(user);
            req.userId = user.id_user;
            req.username = user.username;
            next();
        });
    }
    catch (e) {
        console.error(e);
    }
}
function isExempted(url) {
    for (const exemptedEndpoint of EXEMPTED_ENDPOINTS)
        if (url.includes(exemptedEndpoint))
            return true;
    return false;
}
const EXEMPTED_ENDPOINTS = [
    'auth/login',
    'auth/register',
    // endpoints below this message should only be there for testing purpose
    'plants/identify'
];
