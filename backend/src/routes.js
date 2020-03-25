const express = require('express');
const ongController = require('./controllers/ongController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const incidentController = require('./controllers/incidentController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;