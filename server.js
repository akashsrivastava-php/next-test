const path = require('path')
require('dotenv').config({ path: path.join(__dirname, `./.environment/.env.${process.env.NODE_ENV}`)});
const http = require('http');
const fs = require('fs')
const { parse } = require('url')
const https = require('https');
const express = require('express')
const next = require('next')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

const port = parseInt(process.env.PORT,10)

const { BUILD_DIRECTORY } = process.env

app.prepare().then(() => {
	const server = express()
	/* APPLYING CORS & COMPRESSION  */
	server.use(cors())
	server.use(cookieParser())
	server.use(compression())
	server.use(express.static(path.join(__dirname, '/public'), { index: false }))

	server.get('*', handle)


	const httpServer = http.createServer(server);
	httpServer.listen(port, err => {
		if (err) throw err
		console.log(`> Port is ${port}`) //eslint-disable-line
		console.log(`> Environment is \`${process.env.NODE_ENV}\``) //eslint-disable-line
	}).on('error', (error) => {
		console.log(`\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n`) //eslint-disable-line
		console.log(`> Unable to run application on port -> ${port}`) //eslint-disable-line
		console.log(`> ERROR CODE -> ${error.code}`) //eslint-disable-line
		console.log(`> ERROR NUMBER -> ${error.errno}`) //eslint-disable-line
		console.log(`\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n`) //eslint-disable-line
	});
});
