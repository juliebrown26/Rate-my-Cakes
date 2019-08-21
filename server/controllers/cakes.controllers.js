const { Cake, Comment } = require('../models/cake.model')

exports.showAll = (req, res) => {
    Cake.find()
        .then(cakes => res.json(cakes))
        .catch(err => res.json(err))
}

exports.showOne = (req, res) => {
    Cake.findOne({_id: req.params.id})
        .then(cake => res.json(cake))
        .catch(err => res.json(err))
}

exports.newCake = (req, res) => {
    const cake = new Cake(req.body);
    cake.save()
        .then(cake => res.json(cake))
        .catch(err => res.json(err))
}

exports.newComment = (req, res) => {
    const comment = new Comment(req.body);
    comment.save()
        .then(comment => res.json(comment))
        .catch(err => res.json(err))
}