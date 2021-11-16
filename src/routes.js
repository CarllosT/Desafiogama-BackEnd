import { Router } from 'express';
const routes = new Router();
import UserController from './app/controllers/UserController'

routes.get('/', (req, res) => {
    res.json({ message: 'ok'})
})

routes.post('/user', UserController.store)


export default routes;