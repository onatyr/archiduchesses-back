"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.authController = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("@api/database/database");
const jsonwebtoken_1 = require("jsonwebtoken");
const schema_1 = require("@api/database/schema");
const drizzle_orm_1 = require("drizzle-orm");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const process = __importStar(require("node:process"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), '.env'),
});
exports.authController = (0, express_1.default)();
exports.authController.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.db
            .select()
            .from(schema_1.users)
            .where((0, drizzle_orm_1.eq)(schema_1.users.email, req.body.email))
            .limit(1)
            .execute();
        const user = result[0];
        if (!user || !(yield bcrypt_1.default.compare(req.body.password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const jwtUser = {
            id_user: user.id,
            username: user.name,
        };
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
        if (!accessTokenSecret)
            return res.status(500).json({ message: 'Server error' });
        const token = (0, jsonwebtoken_1.sign)(jwtUser, accessTokenSecret);
        return res
            .status(200)
            .json({ token, userId: user.id, userName: user.name });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}));
exports.authController.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if the user already exists
        const existingUser = yield database_1.db
            .select()
            .from(schema_1.users)
            .where((0, drizzle_orm_1.eq)(schema_1.users.email, req.body.email))
            .limit(1)
            .execute();
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const result = yield database_1.db
            .insert(schema_1.users)
            .values({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
            .execute();
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Registration failed' });
    }
}));
