import Contato from '../models/Contato';

class ContatoController  {

    async store(req,res) {
        const contactExists = await Contato.findOne({ where: { cpf: req.body.cpf}});

        if(contactExists){
            return res.status(400).json ({ message: 'Contato já enviado com esses dados!'})
        }


        const { id, name, email, cpf, cep, logradouro, numero, bairro, cidade, uf, telefone, whatsapp,curso,categoria } = await Contato.create(req.body);
        return res.json({
           message: 'Contato Enviado!'
        })
        
    }

}

export default new ContatoController();