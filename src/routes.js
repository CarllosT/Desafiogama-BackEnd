import swaggerUI from 'swagger-ui-express';
import express from 'express';
const routes = express();
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import ContatoController from './app/controllers/ContactController';
import swaggerDocument from '../swagger';

routes.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

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

export default routes;