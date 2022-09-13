import express from 'express'
import apiController from '../controller/apiController'

let router = express.Router()

const initAPIRouter = (app) => {
    // router.get('/users', apiController.getAllUsers)
    
    router.post('/create-new-user', apiController.createNewUser)

    return app.use('/api/v1/',router)
}

export default initAPIRouter