const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./mongo.config');
const {dummyData} = require('./dummyHotels');


const server = express();
const devMode = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 3001;

/* Configuracion Express */

/* Middleware */
server.use(morgan('dev'));
server.use(express.json());

/* Dummy data Hotels */
dummyData();

/* Routes API Rest */
server.use('/api/hotels', require('./routes/hotels.routes'));

/* Static files build */
server.use(express.static(path.join(__dirname, '../../public')));

server.listen(port, () =>{
    console.info(`::: Node Express | Port ${port}`);
})