import express from 'express';
const routes = express();
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import ContatoController from './app/controllers/ContactController';
//import Tratativa from './tratativa';

routes.use(express.static(__dirname + '/pages/assets/js/'));
routes.use(express.static(__dirname + '/pages/assets/css/'));
routes.use(express.static(__dirname + '/pages/assets/img/'))

routes.use(express.urlencoded());
routes.use(express.json());


routes.set('view engine', 'ejs');


routes.get('/', (req, res) => {
    res.render(__dirname + "/pages/home");
});

routes.post('/user', UserController.store);
routes.post('/Contato', ContatoController.store);

routes.post('/session', SessionControler.store);

routes.put('/user', UserController.update)

export default routes;