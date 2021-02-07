var Section = require('../models').Section;

module.exports = {
    async create (req,res){
        try{
            let response = await Section.create({
                name: req.body.name,
                userId: req.body.userId
            });
            res.send(response);
        }
        catch(err){
            return console.error("create section error", err);
        }
    },
    async update (req,res){
        try{
            let response = await Section.update({
                name: req.body.name, 
                director: req.body.director
            },
            {
                where:{
                    id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            console.error('update section error', err);
        }
    },
    async delete (req,res){
        try{
            await Section.destroy({
                where:{
                    id: req.params.id
                }
            });
            return res.json({msg: 'setor excluido'});
        }
        catch(err){
            return console.err('erro na exclusao do setor', err);
        }
    },
    async list (req,res){
        try{ 
            const sections = Section.findAll();
            return res.json(sections);
        }
        catch(err){
            console.error('list section error', err);
        }
    }
}