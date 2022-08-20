import { Request, Response } from "express";

const express = require('express');
const path = require('path');
export const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(5000, () => {
    console.log('Application listening on port 5000!');
});