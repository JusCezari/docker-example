var express = require('express');
var router = express.Router();
var models = require('../models');

router.route('/')

    .get(function (req, res) {

        models.Person.findAll()
            .then(function (people) {
                res.status(200).json(people);
            })
            .catch(function (err) {
                res.send(err);
            });

    })

    .post(function (req, res) {

        models.Person.create({
            name: req.body.name,
            email: req.body.email
        })
            .then(function (person) {
                res.status(200).json(person);
            })
            .catch(function (err) {
                res.send(err);
            });

    });

module.exports = router;
