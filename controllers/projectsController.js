var Projects = require('../models').Projects;

module.exports = {
    async create (req, res){
        try{
            let response = await Projects.create({
                name: req.body.name, 
                contributors: req.body.contributors,
                status: req.body.status,
                description: req.body.description
            });
            res.send(response);
        }
        catch(err){
            console.error("create projects error", err);
        }
    },
    async update (req, res){
        try{
            let response = await Projects.update({
                name: req.body.name,
                contributors: req.body.contributors,
                status: req.body.status,
                description: req.body.description
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            console.error("update projects error", err);
        }
    },
    async list (req,res){
        try{
            const projects = await Projects.findAll({
                where: {
                    status:req.params.status
                }
            });
            return res.json(projects);
        }
        catch(err){
            console.error('list projects error', err);
        }
    }
}