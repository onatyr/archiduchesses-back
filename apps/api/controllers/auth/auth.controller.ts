import express from "express";
import {db} from "../../database/database";
import {sign} from "jsonwebtoken";
import {users} from "../../database/schema";
import {and, eq} from "drizzle-orm";
import {JwtUserModel} from "./auth.model";
import dotenv from "dotenv";
import path from "path";
import * as process from "node:process";
import {User} from "@shared/models/user.model";
import bcrypt from "bcrypt"


dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});

export const authController: express.Router = express();

authController.post("/login", async (req: express.Request<unknown, unknown, {
    username: string,
    password: string,
}>, res) => {
    const user = await db.select().from(users)
        .where(
            and(
                eq(users.name, req.body.username),
                eq(users.password, req.body.password)
            )
        )
        .limit(1)
        .execute()

    if (!user[0]) return res.status(500)

    const jwtUser: JwtUserModel = {
        id_user: user[0].id,
        username: user[0].name
    }

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
    if (!accessTokenSecret) return res.status(500)

    const token = sign(jwtUser, accessTokenSecret)
    res.status(200).json({token})
})

authController.post("/register", async (req: express.Request<unknown, unknown, User>, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const result = await db.insert(users).values({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }).execute();

    if (!result || result.rowCount === 0) return res.status(500).json()
    res.status(201).json()
})

// todo add decryption when bcrypt is installed. add middleware to retrieve user id

