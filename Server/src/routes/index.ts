import { Response, Request } from "express";

const { Router } = require('express');

const router = new Router();


router.get('/auth', (req: Request, res: Response)=> {
    
    return res.json({id: 22})
});


module.exports = router;