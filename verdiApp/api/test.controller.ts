import express from "express";

export const testController: express.Router = express();

testController.get("/", (req, res) => {
    console.log("youhou")
    res.status(200).json()
});

// async (req: express.Request, res: express.Response, next: NextFunction)