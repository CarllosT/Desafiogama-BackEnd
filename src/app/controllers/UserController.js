

class UserController  {

    async store(req,res) {
        const { name } = req.body;
        res.json(name)
    }

}

export default new UserController();