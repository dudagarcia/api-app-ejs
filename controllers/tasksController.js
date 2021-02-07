var Tasks = require('../models').Tasks;

module.exports = {
    async create (req,res) {
        try{
            let response = await Tasks.create({
                name: req.body.name,
                details: req.body.details,
                date: req.body.date,
                repetition: req.body.repetition,
                contributors: req.body.contributors,
                done: req.body.done
            });
            res.send(response);
        }
        catch(err){
            console.error('create task error', err);
        }
    },
    async update (req, res){
        try{
            let response = await Tasks.update({
                name: req.body.name,
                details: req.body.details,
                date: req.body.date,
                repetition: req.body.repetition,
                contributors: req.body.contributors,
                done: req.body.done
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            console.log('update task error', err);
        }
    },
    async list (req,res){
        try{
            const tasks = await Tasks.findAll({
                where:{
                    contributors: req.params.contributors
                }
            });
            return res.json(tasks);
        }
        catch(err){
            console.error('list tasks error', err);
        }
    }
}