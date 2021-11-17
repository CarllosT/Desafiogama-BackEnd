import { Router } from 'express';
const routes = new Router();
import UserController from './app/controllers/UserController'
import SessionControler from './app/controllers/SessionController'

routes.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
})

routes.post('/user', UserController.store);

routes.post('/session', SessionControler.store);

routes.put('/user', UserController.update)

export default routes;