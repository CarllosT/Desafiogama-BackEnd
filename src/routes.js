import express from 'express';
const routes = express();
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import Tratativa from './tratativa';

routes.use(express.static(__dirname + '/pages/assets/js/'));
routes.use(express.static(__dirname + '/pages/assets/css/'));
routes.use(express.static(__dirname + '/pages/assets/img/'))
//routes.use(express.static('pages'));
routes.set('view engine', 'ejs');


routes.get('/', (req, res) => {
    res.render(__dirname + "/pages/home");
});

routes.post('/tratativa', Tratativa.erro);

routes.post('/user', UserController.store);

routes.post('/session', SessionControler.store);

routes.put('/user', UserController.update)

export default routes;