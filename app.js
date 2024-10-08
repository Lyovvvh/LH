import 'dotenv/config.js';
import './initTables.js';

import path from "path";
import express from "express";
import logger from 'morgan';
import createError from "http-errors";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index.js";

const app = express();

app.set('views', path.resolve('./views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.resolve('./public')))

app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = err;

    res.status(err.status || 500)
    res.render('error')
})

export default app