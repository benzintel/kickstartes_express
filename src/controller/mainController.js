const mainService = require('../service/mainService');
const sMain = new mainService();



exports.main = async function (req, res) {
    const a = await sMain.pingPong(50);
    res.send(JSON.stringify({
        status: true,
        data: a
    }));
};

exports.testAccess = async function (req, res) {
    res.send(JSON.stringify({
        status: true,
        messages: 'pong'
    }));
};