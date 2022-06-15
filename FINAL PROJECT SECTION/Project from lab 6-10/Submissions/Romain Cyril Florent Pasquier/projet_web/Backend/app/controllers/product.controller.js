const Product = require('../models/product.model.js');

// POST a Product
exports.create = (req, res) => {
    // Create a Product
    const product = new Product(req.body);
    // Save a Product in the MongoDB
    product.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// FETCH all products
exports.findAll = (req, res) => {
    Product.find()
        .then(products => {
            res.send(products);
        })
        .catch(err => {
            res.status(500).send({
        message: err.message
            });
        });
};

// FIND a Product
exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " +
                    req.params.id
                });
            }
            res.send(product);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " +
                    req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " +
                req.params.id
            });
        });
};

//Update product
exports.update = (req, res) => {
    console.log(req.body._id)
    //Find product and update it
    Product.findOneAndUpdate({ _id: req.body._id},
        {$set : {category: req.body.category,
                        name: req.body.name,
                        price: req.body.price,
                        acount: req.body.acount,
                        description: req.body.description,
                        image: req.body.image}},{new: true})
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " +
                        req.params._id
                });
            }
            res.send(product);
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

//Update product
exports.updateGrade = (req, res) => {
    console.log(req.body._id)
    //Find product and update it
    Product.findOneAndUpdate({ _id: req.body._id},
        {$set : {rating: req.body.rating}},{new: true})
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " +
                        req.params._id
                });
            }
            res.send(product);
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

// DELETE a Product
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " +
                    req.params.id
                });
            }
            res.send({message: "Product deleted successfully!"});
        })
        .catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Product not found with id " +
                    req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete product with id " +
                req.params.id
            });
        });
};