import express from 'express'
import * as IndexController from '../Controllers/IndexController'

const ROUTER = express.Router()

ROUTER.get('/indexRoute', IndexController.index)


export default ROUTER