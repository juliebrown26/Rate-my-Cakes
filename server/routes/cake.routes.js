module.exports = app => {
    const cakeController = require('../controllers/cakes.controllers');
        app.get('/api/cakes', cakeController.showAll);
        app.get('/api/cakes/:id', cakeController.showOne);
        app.post('/api/cakes', cakeController.newCake);
        app.post('/api/comments', cakeController.newComment);
};