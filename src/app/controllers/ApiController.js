import Categoria from '../models/Categoria';

class CatController  {

    async store(req,res) {
        const userExists = await Categoria.findOne({ where: { name: req.body.name}});

        if(userExists){
            return res.status(400).json ({ message: 'Categoria já existe'})
        }


        const { id, name } = await Categoria.create(req.body);
        return res.json({
           message: 'Categoria Criada'
        })
        
    }

    async list(req,res){
        const list = await Categoria.findAll();
         return console.log(list);
    }

}

export default new CatController();