const products = require("../controllers/product.controller.js");
module.exports = function(app) {
    const products = require('../controllers/product.controller.js');
    // Create a new product
    app.post('/api/product', products.create);

    // Retrieve all product
    app.get('/api/products', products.findAll);

    // Retrieve a single product by Id
    app.get('/api/product/:id', products.findOne);

    // Update a productcommand with Id
    app.put('/api/productUpdate', products.update);

    // Update rating
    app.put('/api/productUpdateGrade', products.updateGrade)

    // Delete a productcommand with Id
    app.delete('/api/product/:id', products.delete);

    const userHandlers = require('../controllers/user.controller.js');

    // post request for user registration
    app.post('/api/user', userHandlers.register);

    // get all users
    app.get('/api/users', userHandlers.findAll);

    // post request for user log in
    app.post('/api/users', userHandlers.signIn);

    // Update a productcommand with IdCloient
    app.put('/api/user', userHandlers.update);

    // Update banned with Id
    app.put('/api/users', userHandlers.block);
}
