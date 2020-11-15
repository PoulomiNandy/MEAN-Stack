const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Pangolin } = require('../models/pangolin');

// => localhost:3000/pangolins/
router.get('/', (req, res) => {
    Pangolin.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Pangolins :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Pangolin.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Pangolin :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var pan = new Pangolin({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    pan.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Pangolin Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var pan = {
        age: req.body.age,
        family: req.body.family,
        race: req.body.race,
        food: req.body.food,
    };
    Pangolin.findByIdAndUpdate(req.params.id, { $set: pan }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Pangolin Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Pangolin.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Pangolin Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;