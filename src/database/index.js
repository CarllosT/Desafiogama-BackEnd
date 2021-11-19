import Sequelize from 'sequelize';
import User from '../app/models/User';
import Contato from '../app/models/Contato'
import databaseConfig from '../config/database';
import Categoria from '../app/models/Categoria';

const models = [User,Contato,Categoria];

class Database {
    constructor(){
        this.init();

    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
        .map( model => model.init(this.connection))
        .map( model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database();