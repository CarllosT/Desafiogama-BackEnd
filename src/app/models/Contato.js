import Sequelize , { Model } from "sequelize";

class Contato extends Model {
    static init(sequelize){
        super.init(
            {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            cpf: Sequelize.STRING,
            cep: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.STRING,
            bairro: Sequelize.STRING,
            cidade: Sequelize.STRING,
            uf: Sequelize.STRING,
            telefone: Sequelize.STRING,
            whatsapp: Sequelize.STRING,
            curso: Sequelize.STRING,
            categoria: Sequelize.STRING,
            
            },
            {
            sequelize
            });
        return this;
    
    }
}

export default Contato;