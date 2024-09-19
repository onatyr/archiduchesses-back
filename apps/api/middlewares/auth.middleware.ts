import express, {NextFunction} from "express";
import {JwtPayload, verify} from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import process from "node:process";
import {JwtUserModel} from "../controllers/auth/auth.model";

dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});

export function authenticate(
    req: express.Request,
    res: express.Response,
    next: NextFunction
) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token || !process.env.ACCESS_TOKEN_SECRET) return res.status(401).json()

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userPayload: JwtPayload | string | undefined) => {
        const user = userPayload as JwtUserModel
        req.userId = user.id_user
        req.username = user.username
        next()
    })
}

