var Availability = require('../models').Availability;

module.exports = {
    async create (req,res){
        try{
            let response = await Availability.create({
                userId: req.body.userId,
                sunday: req.body.sunday,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday,
                saturday: req.body.saturday
            });
            res.send(response);
        }
        catch(err){
            return console.error("create availability error", err);
        }
    },
    async update (req,res){
        try{
            let response = await Availability.update({
                sunday: req.body.sunday,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday,
                saturday: req.body.saturday
            },
            {
                where:{
                    id: req.params.id
                }
            });
            res.send(response);
        }
        catch(err){
            console.error("update availability error", err);
        }
    },
    async list(req, res){
        try{
            const availabilities = await Availability.findAll({
                where:{
                    userId: req.params.userId
                }
            });
            return res.send(availabilities);
        }
        catch(err){
            console.error('list availabilities error', err);
        }
    }
}