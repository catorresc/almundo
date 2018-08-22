const express = require('express');
const morgan = require('morgan');

const server = express();
const devMode = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 3001;

/* Configuracion Express */

/* Middleware */
server.use(morgan('dev'));
/* Routes API Rest */

/* Static React */

server.listen(port, () =>{
    console.info(`::: Node Express | Port ${port}`);
})