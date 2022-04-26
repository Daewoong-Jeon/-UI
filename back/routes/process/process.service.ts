import express, { Request, Response } from "express";
import fs from "fs";

const app = express();
app.set("query parser", "extended");

export const getProcess = async (request: Request, response: Response) => {
    // const { test, test2 } = request.body;

    // if (test === undefined || test2 === undefined) {
    //     response.status(400).json({ errMessage: "bad request" });
    // }
    // console.log(request.body);
    // console.log(test);
    // console.log(test2);
    // fs.writeFile("../data/process.json", JSON.stringify(request.body), (error) => {
    //     if (error) {
    //         console.log(error);
    //         response.status(500).send("fail");
    //     }
    //     response.send("success");
    // });
};

export const postProcess = async (request: Request, response: Response) => {
    const { title, subTitle } = request.body;

    if (title === undefined || subTitle === undefined) {
        response.status(400).json({ errMessage: "bad request" });
    }
    console.log(request.body);
    fs.writeFile("../data/process.json", JSON.stringify(request.body), (error) => {
        if (error) {
            console.log(error);
            response.status(500).send("fail");
        }
        response.send("success");
    });
};