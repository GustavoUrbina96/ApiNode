import mongoose from 'mongoose';
let Model = mongoose.Schema;
const ActorModel = require('./ActorModel').Model;
const DirectorModel = require('./DirectorModel').Model;
let SerieModel = new Model({
    name: String,
    Director: DirectorModel,
    Actor: ActorModel,
    Seasons: String
});

module.exports =  mongoose.model('Serie', SerieModel);