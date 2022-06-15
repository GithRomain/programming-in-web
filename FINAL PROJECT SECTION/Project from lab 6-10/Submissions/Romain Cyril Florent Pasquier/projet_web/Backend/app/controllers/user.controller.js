// import User model
const User = require("../models/user.model");

// import jsonwebtoken
const jwt = require('jsonwebtoken');

    // import bcryptjs - hashing function
const bcrypt = require('bcryptjs');

// FETCH all users
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// User Register function
exports.register = (req, res) => {
    let newUser = new User(req.body);

    newUser.hash_password = bcrypt.hashSync(req.body.hash_password, 10);

    newUser.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// User Sign function
exports.signIn = (req, res) => {
    User.findOne({email: req.body.email}, function (err, user) {
        if (!user.comparePassword(req.body.hash_password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
        else
        {
            res.send(user)
        }

    });
}

// UPDATE a user
exports.update = (req, res) => {
    console.log(req.body.commands)
    //Find product and update it
    User.findOneAndUpdate({ _id: req.body._id},
        {$set : {commands: req.body.commands, total: req.body.total}},{new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.params._id
                });
            }
            res.send(user);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.params._id
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " +
                    req.params._id
            });
        });
};

// block a user
exports.block = (req, res) => {
    //Find product and update it
    User.findOneAndUpdate({ _id: req.body._id},
        {$set : {banned: req.body.banned}},{new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.params._id
                });
            }
            res.send(user);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.params._id
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " +
                    req.params._id
            });
        });
};


