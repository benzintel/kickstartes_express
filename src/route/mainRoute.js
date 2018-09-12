const mainController = require('../controller/mainController');
const userMiddleware = require('../middleware/userMiddleware');


module.exports = function(server, prefixUrl){

    server.get( `${prefixUrl}/`, userMiddleware.verifyToken, mainController.main);
    server.get( `${prefixUrl}/ping`, userMiddleware.verifyToken, mainController.testAccess);

};