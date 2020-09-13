const express = require('express');
const routes = express.Router();
const categoriesController = require('./categories.controller');

routes.get('/getAllCategories', categoriesController.getAllCategories);
routes.post('/addCategory', categoriesController.addCategory);
routes.delete('/removeCategory', categoriesController.removeCategory);

module.exports = routes;
