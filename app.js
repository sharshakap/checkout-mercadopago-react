require('dotenv').config();
const Server = require('./models/server');
const server = new Server();
//public
server.app.get('*', (req, res) => {
	//en caso de que la ruta no exista igual referenciamos al index
	res.sendFile(path0 + '/public/index.html');
});

server.listen();
