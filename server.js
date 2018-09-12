const express = require('express');
const server = express();

// Add env
require('dotenv').config()


// Add Route

/**
 * @description route
 */

/** 
 * @param server 
 * @param path_route
 * @description example path {domain}/main/{route}
 */
require('./src/route/mainRoute')(server, '/main');



server.listen(process.env.START_SERVER || 4000, () => 
    console.log(`Example app listening on port ${process.env.START_SERVER || 4000}`)
);


// Route Error 404
server.get('*', function(req, res){
    res.send('Error 404', 404);
});