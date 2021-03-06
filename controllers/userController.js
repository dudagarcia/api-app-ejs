var User = require('../models').User;

module.exports = {
    async login(req, res){
        try{
            let response = await User.findOne({
                where: {
                  email: req.body.email,
                  password: req.body.password
                }
            });
            res.send(response);
        }
        catch(err){
            return console.error("login error", err);
        }
    },
    async create(req, res){
        try{
            let response = await User.create({
                email: req.body.email,
                password: req.body.password,
                admin: req.body.admin
            });
            res.send(response);
        }
        catch(err){
            return console.error("create error", err);
        }
    },
    async update(req, res){
        try{
            let response = await User.update({
                name: req.body.name,
                birthDate: req.body.birthDate,
                email: req.body.email,
                phoneNumer: req.body.phoneNumer,
                sectionId: req.body.sectionId,
                photo: req.body.photo
              },
              {
                where:{
                  id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            return res.json({msg: 'usuario alterado'}, err);
        }
    },
    async updatepassword(req, res){
        try{
            let response = await User.update({
                password: req.body.password
              },
              {
                where:{
                  id: req.params.id
                }
              });
            res.send(response);
        }
        catch(err){
            return res.json({msg: 'senha alterada'}, err);
        }
    },
    async updateadmin(req, res){
        try{
            let response = await User.update({
                admin: req.body.admin
              },
              {
                where:{
                  id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            return res.json({msg: 'estado do admin alterado'}, err);
        }
    },
    async delete(req, res){
        try{
            await User.destroy({
                where:{
                  id: req.params.id
                }
            });
            return res.json({msg: 'usuario excluido'});
        }
        catch(err){
            return console.err('erro na exclusao do user', err);
        }
    },
    async updateemailcode(req, res){
        try{
            let response = await User.update({
                emailCode: req.body.emailCode
            },
            {
                where:{
                    id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            return console.err('erro ao salvar codigo', err);
        }
    },
    async listSome (req, res){
        try{
            const users = await User.findAll({
                where:{
                    section: req.params.section
                }
            });
            return res.json(users);
        }
        catch(err){
            console.error('listSome user error', err);
        }
    },
    async listAll (req,res){
        try{
            const users = await User.findAll()
            return res.json(users);
        }
        catch(err){
            console.error('listAll user error', err);
        }
    },
    
}