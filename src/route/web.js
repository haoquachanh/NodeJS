import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.post('/create-new-user', homeController.getCreateNewUser)
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.get('/edit-user/:iduser',homeController.editUser)
    router.post('/delete-user',homeController.deleteUser)
    router.post('/post-update',homeController.postUpdateUser)
    router.get('/about',(req,res)=> {
        res.send(`I'm here for you, and you?`)
    })
    return app.use('/',router)
}

export default initWebRoute