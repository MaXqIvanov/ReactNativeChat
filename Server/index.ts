import { Request, Response } from "express";

const express = require('express');
const path = require('path');
const cors = require('cors')
const router = require('./src/routes')
export const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/index.html`);
}); 


app.listen(5000, () => {    
    console.log('Application listening on port 5000!');
});