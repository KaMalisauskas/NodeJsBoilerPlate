import "babel-polyfill";
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import CONNECT from './DB/connect'

//Routes
import IndexRoute from './Routes/IndexRoute'

const APP = express()

APP.use(cors())
APP.use(bodyParser.urlencoded());
APP.use(bodyParser.json());


APP.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: "Welcome to Spiderpreme api!"
    })
})

APP.use(IndexRoute)



export default APP
