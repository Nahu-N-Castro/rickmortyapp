// const express = require('express').Router()
// const server = express()
// const morgan = require('morgan')
// const characterRouter = require('./characterRouter')
// const { deleteFav } = require('../controllers/deleteFav');
// const { postFav } = require('../controllers/postFav');
// const { login } = require('../controllers/login');
// const router = require('express').Router();
// //!! ---Middlewares---

// // server.use(morgan('dev'));
// // server.use(express.json()); // parseamos la info que llega de request



// router.get('/character/:id', getCharById);

// server.use('/character', characterRouter)

// server.get('/login', login);

// server.post('/login', login);

// server.post('/fav', postFav);

// server.delete('/fav/:id', deleteFav);


// module.exports = server;
const {getCharById} = require('../controllers/getCharById')
const { deleteFav } = require('../controllers/deleteFav');
const { postFav } = require('../controllers/postFav');
const { login } = require('../controllers/login');

const router = require('express').Router();

router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = router;