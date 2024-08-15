import express from 'express';
import userController from '../controllers/usersController.js';
import validator from '../middlewares/validate.js';
import schemas from '../schemas/usersSchemas.js';

const router = express.Router();

router.get('/registration',(req,res)=>{
    res.render('registration');
});

router.post('/registration', validator(schemas.register, 'body'),userController.registration);

export default router
