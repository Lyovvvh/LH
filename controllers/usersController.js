import CryptoJS from 'crypto-js';
import userModel from '../models/usersModel.js';
import createHttpError from "http-errors";

export default {
    async registration(req, res, next) {
        try {
            const {name, email, number} = req.body;

            const emailUsed = await userModel.getUserByEmail(email);

            if (emailUsed) {
                next (new createHttpError(422, "email already exists"));
            }
            const {newUser} = await userModel.registration({name, email, number});
            res.json({newUser});

        } catch (err) {
            console.log(err)
            res.status(500).json({"message": "sever error", error: err});
        }
    },

}