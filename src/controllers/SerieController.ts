import { Router } from 'express';
const SerieModel = require('../models/SerieModel');
//Ruta de xpress
export const SerieRouter = Router();

//GET
SerieRouter.get('/getAllSeries', (req, res) => {
    SerieModel.find((error, success) => {
        if (error)
            return res.status(500).send({ message: 'Connection Fail' })
        if (!success)
            return res.status(404).send({ message: 'No records' })

        return res.status(200).send({ success })
    })

})


//Get by ID
SerieRouter.get('/getSerieByID/:id', (req, res) => {
    const idSerie = req.params.id;
    SerieModel.findById(idSerie, (error, success) => {
        if (error)
            return res.status(500).send({ message: "Internal Server error, serie didn't found" });
        if (!success)
            return res.status(404).send({ message: "Serie didn't found" });
        return res.status(200).send({ success });
    })
})

//POST
SerieRouter.post('/addNewSerie', (req, res) => {
    const newValues = req.body;
    let newSerie = new SerieModel();
    //CAMBIAR ESTA MADRE
    newDirector.name = newValues.name;
    newDirector.age = newValues.age;
    newDirector.from = newValues.from;
    newDirector.save((error, success) => {
        if (error)
            return res.status(500).send({ message: 'Internal Server error, director doesn´t saved' });
        if (success)
            return res.status(200).send({ success });

        return res.status(404).send({ message: 'director not saved!' });
    })

})
//DELETE
SerieRouter.delete('/deleteDirector/:id', (req, res) => {
    const idDirector = req.params.id;
    SerieModel.findByIdAndRemove(idDirector, (error, success) => {

        if (error)
            return res.status(500).send({ message: "Internal Server error, director doesn´t Deleted" });
        if (success)
            return res.status(200).send({ message: "director Deleted!" });

        return res.status(400).send({ message: "director no deleted." });
    })
})

//PATCH
SerieRouter.patch('/updateDirector/:id', (req, res) => {
    const idDirector = req.params.id;
    const updateValues = req.body;
    SerieModel.update({ _id: idDirector }, { $set: updateValues }, (error, success) => {
        if (error)
            return res.status(500).send({ message: "Internal server error, director doesn't updated" });
        if (success)
            return res.status(200).send({ message: "director updated" });

        return res.status(404).send({ message: "director not updated" });

    })
})

